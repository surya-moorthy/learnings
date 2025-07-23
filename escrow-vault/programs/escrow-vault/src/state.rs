use anchor_lang::prelude::*;

#[account]
#[derive(InitSpace)]
#[instruction(discriminator=1)]
pub struct Escrow {
    pub seed : u64,
    pub maker : Pubkey,
    pub mint_a : Pubkey,
    pub mint_b : Pubkey,
    pub receive : u64,  // amount to receive from the maker
    pub bump : u8
}

