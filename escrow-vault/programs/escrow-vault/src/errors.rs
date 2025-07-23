use anchor_lang::prelude::*;

#[error_code]
pub enum EscrowErrors {
    #[msg("invliad amount")]
    InvalidAmount,

    #[msg("invalid message")]
    InvalidInput,

    #[msg("invalid mint a")]
    InvalidMintA,

    #[msg("invalid mint b")]
    InvalidMintB,

}