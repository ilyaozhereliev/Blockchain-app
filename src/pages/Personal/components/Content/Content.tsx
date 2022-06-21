import React, { FC } from 'react';

import { CurrenciesData, CurrenciesEnum } from '../../../../types';
import { CryptoCurrencies } from '../CryptoCurrencies';
import { Market } from '../Market';
import { useContent } from './Content.hook';
import styles from './Content.module.scss';
import { MarketActions } from './Content.types';

interface ContentProps {
  currenciesData: CurrenciesData;
}

export const Content: FC<ContentProps> = ({ currenciesData }) => {
  const {
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
  } = useContent({ currenciesData });

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Портфель</h1>

      <div>
        <h3 className={styles.balance}>Баланс аккаунта</h3>
        <p className={styles.balance__value}>
          {walletAmount}
          {}
          usd
        </p>
      </div>

      <CryptoCurrencies
        walletData={walletData}
        currenciesData={currenciesData}
        onStartMarket={onStartMarket}
      />

      {isShowModal && (
        <div>
          <Market
            usdValue={usdInputValue}
            maxInputValue={maxInputValue}
            cryptoValue={cryptoCurrencyValue}
            marketAction={marketAction as MarketActions}
            selectedCurrency={selectedCurrency as CurrenciesEnum}
            onChange={onChange}
          />

          <div>
            <button type="button" onClick={onMarketAction}>
              СТОУНК!
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
