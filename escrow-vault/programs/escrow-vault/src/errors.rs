use anchor_lang::prelude::*;

#[error_code]
pub enum EscrowErrors {
    #[msg("invliad amount")]
    InvalidAmount,

    #[msg("invalid maker")]
    InvalidMaker,

    #[msg("invalid mint a")]
    InvalidMintA,

    #[msg("invalid mint b")]
    InvalidMintB,

}