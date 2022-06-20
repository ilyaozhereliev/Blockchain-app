import { WALLET_ACTION_TYPES } from './action-types';
import { UpdateWalletAction, Wallet } from './types';

export const updateWallet = (updatedWallet: Wallet): UpdateWalletAction => ({
  type: WALLET_ACTION_TYPES.UPDATE_WALLET,
  payload: updatedWallet,
});
