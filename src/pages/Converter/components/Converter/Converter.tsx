import cn from 'classnames';
import React from 'react';

import styles from './Converter.module.scss';

export const Converter = () => {
  const currencies = [
    {
      name: 'BTC',
      isSelected: false,
    },
    {
      name: 'ETH',
      isSelected: false,
    },
    {
      name: 'USD',
      isSelected: true,
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.amount}>
        <input className={styles.amount__input} type="text" value={12_000} />
      </div>
    </div>
  );
};
