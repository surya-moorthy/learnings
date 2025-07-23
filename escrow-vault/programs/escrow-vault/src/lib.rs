use anchor_lang::prelude::*;

pub mod state;
pub mod errors;
pub mod instructions;

declare_id!("GmiyTHcVc1NMWY462LzhWF6eYmLsszN9xDkQmfECFbW6");

use instructions::{Make, Take};

#[program]
pub mod escrow_vault {
    use super::*;

    pub fn make(ctx: Context<Make>, seed: u64, receive: u64, amount: u64) -> Result<()> {
        instructions::make::handler(ctx, seed, receive, amount)
    }

    pub fn take(ctx: Context<Take>) -> Result<()> {
        instructions::take::handler(ctx)
    }
}
