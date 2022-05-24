import cn from 'classnames';
import React, { FC } from 'react';

import { CurrenciesEnum } from '../../Converter.types';
import styles from './CurrencyTabs.module.scss';

// Создание интерфейса и типизация входных параметров
interface CurrencyTabsProps {
  title: string;
  selectedCurrency: string;
  handleOnClick: (value: CurrenciesEnum) => void;
}

export const CurrencyTabs: FC<CurrencyTabsProps> = ({ title, selectedCurrency, handleOnClick }) => {
  // Хардкодим кнопки, помещая из в массив
  const currencies = [CurrenciesEnum.BTC, CurrenciesEnum.ETH, CurrenciesEnum.USD];

  // __________________________________Разметка_______________________________________________
  return (
    <div className={styles.currencies}>
      <p className={styles.currencies__title}>{title}</p>

      <div className={styles.currencies__wrapper}>
        {currencies.map((currency) => {
          // Проверка строк на соответствие
          const isSelected = currency === selectedCurrency;

          // ___________________________Разметка___________________________________________
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
