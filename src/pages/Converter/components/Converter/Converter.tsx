import React from 'react';
import cn from 'classnames';
import styles from './Converter.module.css';

export const Converter = () => {
  const currencies = [
    {
      name: 'BTC',
      isSelected: true,
    },
    {
      name: 'ETH',
      isSelected: false,
    },
    {
      name: 'USD',
      isSelected: false,
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.currencies}>
        <div className={styles.currencies__wrapper}>
          {currencies.map(({ name, isSelected }) => (
            <div key={name} className={cn(styles.currencies__item, isSelected && styles.currencies__item_active)}>
              {name}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.amount}>
        <input className={styles.amount__input} type="text" value={12_000} />
      </div>
    </div>
  );
};
