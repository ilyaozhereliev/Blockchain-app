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
      <div>
        <h3 className={styles.balance}>Баланс аккаунта</h3>
        <div className={styles.balance__value}>
          {walletAmount}
          <p className={styles.balance__usd}>USD</p>
        </div>
      </div>
      <CryptoCurrencies
        walletData={walletData}
        currenciesData={currenciesData}
        onStartMarket={onStartMarket}
      />

      {isShowModal && (
        <div className={styles.content}>
          <Market
            usdValue={usdInputValue}
            maxInputValue={maxInputValue}
            cryptoValue={cryptoCurrencyValue}
            marketAction={marketAction as MarketActions}
            selectedCurrency={selectedCurrency as CurrenciesEnum}
            onChange={onChange}
          />

          <div>
            <button className={styles.modal_button} type="button" onClick={onMarketAction}>
              Подтвердить
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
