import { CurrenciesEnum } from '../../../pages/Converter/Converter.types';
import { WALLET_ACTION_TYPES } from './action-types';
import { Wallet, WalletAction } from './types';

const initialState: Wallet = {
  [CurrenciesEnum.BTC]: 0.05,
  [CurrenciesEnum.ETH]: 5,
  [CurrenciesEnum.USD]: 10_000,
};

// eslint-disable-next-line default-param-last
export default (state = initialState, action: WalletAction) => {
  switch (action.type) {
    case WALLET_ACTION_TYPES.UPDATE_WALLET:
      return { ...action.payload };

    default:
      return state;
  }
};
