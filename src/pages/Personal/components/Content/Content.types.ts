import { Wallet } from '../../../../redux/reducers/wallet/types';
import { CurrenciesData, CurrenciesEnum } from '../../../../types';

/** component * */
export type MarketActions = 'BUY' | 'SELL';

export interface OnStartMarketProps {
  marketAction: MarketActions;
  currencyName: CurrenciesEnum;
}

/** hook * */
export interface ContentHookProps {
  currenciesData: CurrenciesData;
}

export interface ContentHookData {
  isShowModal: boolean;
  marketAction: MarketActions | null;
  selectedCurrency: CurrenciesEnum | null;

  walletAmount: string;
  walletData: Wallet;
  usdInputValue: number;
  cryptoCurrencyValue: number;
  maxInputValue: number;
  onChange: (value: number) => void;
  onStartMarket: (props: OnStartMarketProps) => void;
  onMarketAction: () => void;
}
