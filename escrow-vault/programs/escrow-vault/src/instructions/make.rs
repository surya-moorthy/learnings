use anchor_lang::prelude::*;
use anchor_spl::{associated_token::AssociatedToken, token::{Mint, TokenAccount, TransferChecked}, token_interface::TokenInterface};
use anchor_spl::token::transfer_checked;
use crate::state::Escrow;

#[derive(Accounts)]
#[instruction(seed : u64)]
pub struct Make<'info> {
    #[account(mut)]
    pub maker : Signer<'info>,

    #[account(
        init,
        payer = maker,
        space = Escrow::INIT_SPACE + Escrow::DISCRIMINATOR.len(),
        seeds = [b"escrow",maker.key().as_ref(),seed.to_le_bytes().as_ref()],
        bump,
    )]
    pub escrow : Account<'info , Escrow>,

    #[account(
        mint::token_program = token_program
    )]
    pub mint_a : InterfaceAccount<'info, Mint>,

    #[account(
        mint::token_program = token_program
    )]
    pub mint_b : InterfaceAccount<'info,Mint>,

    #[account(
        mut, 
        associated_token::mint = mint_a,
        associated_token::authority = maker,
        associated_token::token_program = token_program
    )]
    pub maker_ata_a : InterfaceAccount<'info , TokenAccount>,

    #[account(
        mut,
        associated_token::mint = mint_a,
        associated_token::authority = escrow,
        associated_token::token_program = token_program
    )]
    pub vault : InterfaceAccount<'info,TokenAccount>,

    pub associated_token_program : Program<'info , AssociatedToken>,
    pub token_program : Interface<'info , TokenInterface>,
    pub system_program : Program<'info, System>
}

impl<'info> Make<'info> {
     fn populate_escrow(&mut self, seed: u64,amount : u64,bump : u64) -> Result<()> {
        self.escrow.set_inner(
            Escrow { 
                seed: (seed), 
                maker: (self.maker.key()), 
                mint_a: (self.mint_a.key()), 
                mint_b: (self.mint_b.key()), 
                receive: (amount), bump: (bump) }
        );

        Ok(())
     }
     fn deposit_tokens(&mut self , amount : u64) -> Result<()> {
        transfer_checked(
            CpiContext::new(self.token_program.to_account_info(), 
          TransferChecked {
            authority : self.maker.to_account_info(),
            from : self.maker_ata_a.to_account_info(),
            to : self.vault.to_account_info(),
            mint : self.mint_a.to_account_info()
          }
        ) , amount,self.mint_a.decimals
    );
        
        Ok(())
     }
}

    