// eslint-disable-next-line no-shadow
export enum CurrenciresEnum {
  BTC = 'BTC',
  ETH = 'ETH',
  USD = 'USD',
}

export interface TabsData {
  selectedCurrency: CurrenciresEnum;
  selectedConversionCurrency: CurrenciresEnum;
}

export interface TabsDataHook {
  tabsData: TabsData;
  handleOnReverseTabs: () => void;
  handleOnChangeSelectedCurrency: (updatedValue: CurrenciresEnum) => void;
  handleOnChangeSelectedConversionCurrency: (updatedValue: CurrenciresEnum) => void;
}

export interface InputsData {
  selectedInput: number;
  selectedConversionInput: number;
}

export interface InputsDataHook {
  inputsData: InputsData;
  handleOnChangeInput: (value: number) => void;
}

export type ConversionHookData = TabsDataHook & InputsDataHook;
