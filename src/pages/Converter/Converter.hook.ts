import { useEffect, useState } from 'react';

import { useCurrenciesData } from './Converter.request';
import {
  ConversionHookData,
  CurrenciesEnum,
  CurrencyData,
  InputsData,
  InputsDataHook,
  TabsData,
  TabsDataHook,
} from './Converter.types';
/* eslint-disable implicit-arrow-linebreak */

const useTabsData = (): TabsDataHook => {
  // Создание типизированного стейта
  const [tabsData, setTabsData] = useState<TabsData>({
    selectedCurrency: CurrenciesEnum.BTC,
    selectedConversionCurrency: CurrenciesEnum.ETH,
  });

  const handleOnChangeSelectedCurrency = (updatedValue: CurrenciesEnum): void =>
    setTabsData({
      ...tabsData,
      selectedCurrency: updatedValue,
    });

  const handleOnChangeSelectedConversionCurrency = (updatedValue: CurrenciesEnum): void =>
    setTabsData({
      ...tabsData,
      selectedConversionCurrency: updatedValue,
    });

  const handleOnReverseTabs = (): void =>
    setTabsData({
      ...tabsData,
      selectedCurrency: tabsData.selectedConversionCurrency,
      selectedConversionCurrency: tabsData.selectedCurrency,
    });

  return {
    tabsData,
    handleOnReverseTabs,
    handleOnChangeSelectedCurrency,
    handleOnChangeSelectedConversionCurrency,
  };
};

const useInputCurrency = ({
  currenciesData,
}: {
  currenciesData: CurrencyData[] | null;
}): InputsDataHook => {
  const [inputsData, setInputsData] = useState<InputsData>({
    selectedInput: 10_000,
    selectedConversionInput: 40_000,
  });

  const handleOnChangeInput = (value: number) =>
    setInputsData({
      ...inputsData,
      selectedInput: value,
    });

  useEffect(() => {
    setInputsData({
      ...inputsData,
      selectedConversionInput: inputsData.selectedInput * 5,
    });
  }, [inputsData.selectedInput]);

  return {
    inputsData,
    handleOnChangeInput,
  };
};

export const useConverter = (): ConversionHookData => {
  const requestData = useCurrenciesData();

  const tabsHookData = useTabsData();
  const inputsHookData = useInputCurrency({ currenciesData: requestData?.data?.data ?? null });

  return {
    ...requestData,
    ...tabsHookData,
    ...inputsHookData,
  };
};
