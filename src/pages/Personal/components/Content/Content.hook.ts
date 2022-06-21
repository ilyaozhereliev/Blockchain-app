/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */
import { useState } from 'react';

import { useTypedSelector } from '../../../../hooks';
import useActions from '../../../../hooks/useActions';
import { CurrenciesEnum } from '../../../../types';
import {
  ContentHookData,
  ContentHookProps,
  MarketActions,
  OnStartMarketProps,
} from './Content.types';

export const useContent = ({ currenciesData }: ContentHookProps): ContentHookData => {
  const { updateWallet } = useActions();
  const walletData = useTypedSelector((state) => state.wallet);

  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [marketAction, setMarketAction] = useState<MarketActions | null>(null);
  const [selectedCurrency, setSelectedCurrency] = useState<CurrenciesEnum | null>(null);

  const [usdInputValue, setUsdInputValue] = useState<number>(0);
  const [cryptoCurrencyValue, setCryptoCurrencyValue] = useState<number>(0);

  const walletAmount = Object.entries(walletData)
    .reduce(
      (acc, [currencyName, currencyValue]) =>
        acc + currenciesData[currencyName as CurrenciesEnum].price * currencyValue,
      0,
    )
    .toLocaleString();

  const onStartMarket = ({ marketAction, currencyName }: OnStartMarketProps): void => {
    setIsShowModal(true);
    setMarketAction(marketAction);
    setSelectedCurrency(currencyName);
  };

  const onBuyChangeInput = (value: number) => {
    setUsdInputValue(value);
    setCryptoCurrencyValue(value / currenciesData[selectedCurrency as CurrenciesEnum].price);
  };

  const onSellChangeInput = (value: number) => {
    setCryptoCurrencyValue(value);
    setUsdInputValue(value * currenciesData[selectedCurrency as CurrenciesEnum].price);
  };

  const onMarketAction = () => {
    if (!selectedCurrency) return;

    const usd =
      marketAction === 'BUY' ? walletData.USD - usdInputValue : walletData.USD + usdInputValue;

    const crypto =
      marketAction === 'BUY'
        ? walletData[selectedCurrency] + cryptoCurrencyValue
        : walletData[selectedCurrency] - cryptoCurrencyValue;

    updateWallet({
      ...walletData,
      [CurrenciesEnum.USD]: usd,
      [selectedCurrency]: crypto,
    });

    setIsShowModal(false);
    setMarketAction(null);
    setSelectedCurrency(null);

    setUsdInputValue(0);
    setCryptoCurrencyValue(0);
  };

  const onChange = marketAction === 'BUY' ? onBuyChangeInput : onSellChangeInput;
  const maxInputValue = marketAction === 'BUY' ? walletData.USD : walletData[selectedCurrency!];

  return {
    isShowModal,
    marketAction,
    selectedCurrency,

    walletData,
    walletAmount,
    usdInputValue,
    maxInputValue,
    cryptoCurrencyValue,
    onChange,
    onStartMarket,
    onMarketAction,
  };
};
