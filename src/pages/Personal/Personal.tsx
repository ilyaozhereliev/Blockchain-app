/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { FC } from 'react';

import { Wrapper } from '../../components';
import { CurrencyData, useCurrenciesData, useTypedSelector } from '../../hooks';
import { CurrenciesEnum } from '../Converter/Converter.types';
import styles from './Personal.module.scss';

export const PersonalPage: FC = () => {
  const { currenciesData, isLoading, isHasError } = useCurrenciesData();

  const walletData = useTypedSelector((state) => state.wallet);

  if (isLoading) {
    return <h1>Загрузка курсов валют...</h1>;
  }
  if (isHasError || !currenciesData) {
    return <h1>Ошибка загрузки валют: перезагрузите страницу.</h1>;
  }

  const walletAmount = Object.values(currenciesData)
    .reduce(
      // @ts-ignore
      (acc: number, currency: CurrencyData) =>
        // @ts-ignore
        acc + currency.price * walletData[CurrenciesEnum[currency.name]],
      0,
    )
    .toLocaleString();

  return (
    <Wrapper pageName="Портфель">
      <div className={styles.page}>
        <div>
          <h3 className={styles.balance}>Баланс аккаунта</h3>
          <p className={styles.balance__value}>
            {walletAmount}
            {' '}
            usd
          </p>
        </div>
      </div>
    </Wrapper>
  );
};
