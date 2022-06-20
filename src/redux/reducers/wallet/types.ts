import { CurrenciesEnum } from '../../../pages/Converter/Converter.types';
import { WALLET_ACTION_TYPES } from './action-types';

// state ____________________________________
export interface Wallet {
  [CurrenciesEnum.BTC]: number;
  [CurrenciesEnum.ETH]: number;
  [CurrenciesEnum.USD]: number;
}

// actions __________________________________________
export interface UpdateWalletAction {
  type: WALLET_ACTION_TYPES.UPDATE_WALLET;
  payload: Wallet;
}

export type WalletAction = UpdateWalletAction;
