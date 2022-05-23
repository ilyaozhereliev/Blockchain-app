import { useEffect, useState } from 'react';

import {
  ConversionHookData,
  CurrenciresEnum,
  InputsData,
  InputsDataHook,
  TabsData,
  TabsDataHook,
} from './Converter.types';
/* eslint-disable implicit-arrow-linebreak */

const useTabsData = (): TabsDataHook => {
  const [tabsData, setTabsData] = useState<TabsData>({
    selectedCurrency: CurrenciresEnum.BTC,
    selectedConversionCurrency: CurrenciresEnum.ETH,
  });

  const handleOnChangeSelectedCurrency = (updatedValue: CurrenciresEnum): void =>
    setTabsData({
      ...tabsData,
      selectedCurrency: updatedValue,
    });

  const handleOnChangeSelectedConversionCurrency = (updatedValue: CurrenciresEnum): void =>
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

const useInputCurrency = (): InputsDataHook => {
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
  const tabsHookData = useTabsData();

  const inputsHookData = useInputCurrency();

  return {
    ...tabsHookData,
    ...inputsHookData,
  };
};
