use anchor_lang::prelude::*;
mod state;
mod errors;
mod instructions;

declare_id!("GmiyTHcVc1NMWY462LzhWF6eYmLsszN9xDkQmfECFbW6");

#[program]
pub mod escrow_vault {
    use std::io::Result;

    use crate::{errors::EscrowErrors, instruction::Make, state::Escrow}; 

    use super::*;

    #[instruction(discriminator=0)]
    pub fn make(ctx : Context<Make>,seed : u64,receive : u64,amount : u64) -> Result<()> {
         Ok(())
    }

    #[instruction(discriminator=1)]
    pub fn take(ctx : Context<Escrow>,seed : u64,receive : u64,amount : u64) -> Result<()> {
        require_gte!(receive,0,EscrowErrors::InvalidAmount);
        require_gte!(amount,0,EscrowErrors::InvalidAmount);

        ctx.accounts.populate_escrow(seed, receive, ctx.bumps.escrow)?;

        ctx.accounts.deposit_amounts(amount)?;
         Ok(())
    }

    #[instruction(discriminator=2)]
    pub fn refund(ctx : Context<_>,seed : u64,receive : u64,amount : u64) -> Result<()> {
         Ok(())
    }
 }

