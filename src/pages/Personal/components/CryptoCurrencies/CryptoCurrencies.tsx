/* eslint-disable implicit-arrow-linebreak */
import cn from 'classnames';
import React, { FC } from 'react';

import { Coins } from '../../../../assets/icons';
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
}) => {
  console.log(Coins);
  return (
    <div className={styles.list}>
      <ul>
        {/* <img className={styles.BTC} src={BTC} alt="BTC" />
      <img className={styles.ETH} src={ETH} alt="ETH" /> */}

        {Object.entries(walletData).map(([name, value]) => {
          const onBuy = () =>
            onStartMarket({ marketAction: 'BUY', currencyName: name as CurrenciesEnum });
          const onSell = () =>
            onStartMarket({ marketAction: 'SELL', currencyName: name as CurrenciesEnum });

          return (
            <div>
              <li className={styles.list__item} key={name}>
                <div className={styles.values}>
                  <img
                    className={styles.coins__icon}
                    src={Coins[name as CurrenciesEnum]}
                    alt={name}
                  />
                  <span>{name}</span>
                  <span>{value.toLocaleString()}</span>
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
            </div>
          );
        })}
      </ul>
    </div>
  );
};
