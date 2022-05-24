import { useCurrenciesData } from './Converter.request';
// eslint-disable-next-line no-shadow
export enum CurrenciesEnum {
  BTC = 'BTC',
  ETH = 'ETH',
  USD = 'USD',
}

// ____________________________Tabs_______________________________
export interface TabsData {
  selectedCurrency: CurrenciesEnum;
  selectedConversionCurrency: CurrenciesEnum;
}

export interface TabsDataHook {
  tabsData: TabsData;
  handleOnReverseTabs: () => void;
  handleOnChangeSelectedCurrency: (updatedValue: CurrenciesEnum) => void;
  handleOnChangeSelectedConversionCurrency: (updatedValue: CurrenciesEnum) => void;
}

// ____________________________Inputs_______________________________
export interface InputsData {
  selectedInput: number;
  selectedConversionInput: number;
}

export interface InputsDataHook {
  inputsData: InputsData;
  handleOnChangeInput: (value: number) => void;
}

// ____________________________Request_______________________________
export interface CurrencyData {
  coin: CurrenciesEnum;
  id: string;
  name: string;
  price: number;
}

export interface CurrenciesDataResponse {
  // массив, в котором каждый жлемент имеет тип CurrencyData
  data: CurrencyData[];
}

export interface CurrenciesDataHook {
  data: CurrenciesDataResponse | null;
  isLoading: boolean;
  isHasError: boolean;
}

export type ConversionHookData = CurrenciesDataHook & TabsDataHook & InputsDataHook;
