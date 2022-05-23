import cn from 'classnames';
import React, { FC } from 'react';

import { CurrenciresEnum } from '../../Converter.types';
import styles from './CurrencyTabs.module.scss';

interface CurrencyTabsProps {
  title: string;
  selectedCurrency: string;
  handleOnClick: (value: CurrenciresEnum) => void;
}

export const CurrencyTabs: FC<CurrencyTabsProps> = ({ title, selectedCurrency, handleOnClick }) => {
  const currencies = [CurrenciresEnum.BTC, CurrenciresEnum.ETH, CurrenciresEnum.USD];

  return (
    <div className={styles.currencies}>
      <p className={styles.title}>{title}</p>

      <div className={styles.currencies__wrapper}>
        {currencies.map((currency) => {
          const isSelected = currency === selectedCurrency;
          return (
            <button
              type="button"
              onClick={() => handleOnClick(currency)}
              key={currency}
              className={cn(styles.currencies__item, isSelected && styles.currencies__item_active)}
            >
              {currency}
            </button>
          );
        })}
      </div>
    </div>
  );
};
