use anchor_lang::prelude::*;
use anchor_spl::{associated_token::AssociatedToken, token::{close_account, CloseAccount, Mint, TokenAccount}, token_interface::TokenInterface};
use anchor_spl::token_interface::transfer_checked;
use crate::{errors::EscrowErrors, state::Escrow};

#[derive(Accounts)]
pub struct Take<'info> {
#[account(mut)]
pub taker: Signer<'info>,
#[account(mut)]
pub maker: SystemAccount<'info>,
#[account(
  mut,
  close = maker,
  seeds = [b"escrow", maker.key().as_ref(), escrow.seed.to_le_bytes().as_ref()],
  bump = escrow.bump,
  has_one = maker @ EscrowErrors::InvalidAmount,
  has_one = mint_a @ EscrowErrors::InvalidMintA,
  has_one = mint_b @ EscrowErrors::InvalidMintB,
)]
pub escrow: Account<'info, Escrow>,
 
/// Token Accounts
pub mint_a: Account<'info, Mint>,
pub mint_b: Account<'info, Mint>,
#[account(
  mut,
  associated_token::mint = mint_a,
  associated_token::authority = escrow,
  associated_token::token_program = token_program
)]
pub vault: Account<'info, TokenAccount>,
#[account(
  init_if_needed,
  payer = taker,
  associated_token::mint = mint_a,
  associated_token::authority = taker,
  associated_token::token_program = token_program
)]
pub taker_ata_a: Account<'info, TokenAccount>,
#[account(
  mut,
  associated_token::mint = mint_b,
  associated_token::authority = taker,
  associated_token::token_program = token_program
)]
pub taker_ata_b: Account<'info, TokenAccount>,
#[account(
  init_if_needed,
  payer = taker,
  associated_token::mint = mint_b,
  associated_token::authority = maker,
  associated_token::token_program = token_program
)]
pub maker_ata_b: Account<'info, TokenAccount>,
 
/// Programs
pub associated_token_program: Program<'info, AssociatedToken>,
pub token_program: Interface<'info, TokenInterface>,
pub system_program: Program<'info, System>,
}


impl<'info> Take<'info> {
  pub fn transfer_to_maker(&mut self) -> Result<()> {
    transfer_checked(
      CpiContext::new(
        self.token_program.to_account_info(),
        anchor_spl::token_interface::TransferChecked {
          from: self.taker_ata_b.to_account_info(),
          to: self.maker_ata_b.to_account_info(),
          mint: self.mint_b.to_account_info(),
          authority: self.taker.to_account_info(),
        },
      ), self.escrow.receive, self.mint_b.decimals
    )?;
 
    Ok(())
  }
 
  pub fn withdraw_and_close_vault(&mut self) -> Result<()> {
    // Create the signer seeds for the Vault
    let signer_seeds: [&[&[u8]]; 1] = [&[
      b"escrow",
      self.maker.to_account_info().key.as_ref(),
      &self.escrow.seed.to_le_bytes()[..],
      &[self.escrow.bump],
    ]];
 
    // Transfer Token A (Vault -> Taker)
    transfer_checked(
      CpiContext::new_with_signer(
        self.token_program.to_account_info(),
        anchor_spl::token_interface::TransferChecked {
          from: self.vault.to_account_info(),
          to: self.taker_ata_a.to_account_info(),
          mint: self.mint_a.to_account_info(),
          authority: self.escrow.to_account_info(),
        },
        &signer_seeds
      ), self.vault.amount, self.mint_a.decimals
    )?;
 
    // Close the Vault
    close_account(
      CpiContext::new_with_signer(
        self.token_program.to_account_info(),
        CloseAccount {
          account: self.vault.to_account_info(),
          authority: self.escrow.to_account_info(),
          destination: self.maker.to_account_info(),
        },
        &signer_seeds
      )
    )?;
 
    Ok(())
  }
}

pub fn handler(ctx: Context<Take>) -> Result<()> {
  // Transfer Token B to Maker
  ctx.accounts.transfer_to_maker()?;
 
  // Withdraw and close the Vault
  ctx.accounts.withdraw_and_close_vault()?;
 
  Ok(())
}