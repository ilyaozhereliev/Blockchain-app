/* eslint-disable implicit-arrow-linebreak */
import cn from 'classnames';
import React, { FC } from 'react';

import { Wallet } from '../../../../redux/reducers/wallet/types';
import { CurrenciesData, CurrenciesEnum } from '../../../../types';
import styles from '../Content/Content.module.scss';
import { OnStartMarketProps } from '../Content/Content.types';

interface CryptoCurrenciesProps {
  walletData: Wallet;
  currenciesData: CurrenciesData;
  onStartMarket: (props: OnStartMarketProps) => void;
}

export const CryptoCurrencies: FC<CryptoCurrenciesProps> = ({
  walletData,
  currenciesData,
  onStartMarket,
}) => (
  <div>
    <ul className={styles.list}>
      {Object.entries(walletData).map(([name, value]) => {
        const usdValue = (value * currenciesData[name as CurrenciesEnum].price).toLocaleString();

        const onBuy = () =>
          onStartMarket({ marketAction: 'BUY', currencyName: name as CurrenciesEnum });
        const onSell = () =>
          onStartMarket({ marketAction: 'SELL', currencyName: name as CurrenciesEnum });

        return (
          <li className={styles.list__item} key={name}>
            <div className={styles.values}>
              <span>{name}</span>
              <span>{value}</span>
              <span>{usdValue}</span>
            </div>

            <div className={styles.buttons}>
              <button
                type="button"
                onClick={onBuy}
                className={cn(styles.button, styles.button__buy)}
              >
                Купить
              </button>
              <button
                type="button"
                onClick={onSell}
                className={cn(styles.button, styles.button__sell)}
              >
                Продать
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  </div>
);
