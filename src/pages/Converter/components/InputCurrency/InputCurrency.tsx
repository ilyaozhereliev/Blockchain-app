import React, { FC } from 'react';

import styles from './InputCurrency.module.scss';

interface InputCurrencyType {
  value: number;
  editable: boolean;
  exchangeCourse: string;
  onChange?: (value: number) => void;
}

export const InputCurrency: FC<InputCurrencyType> = ({
  value,
  editable,
  exchangeCourse,
  onChange = null,
}) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (!editable && !onChange) return;

    const updatedValue = Number(event.target.value);
    if (onChange) {
      onChange(updatedValue);
    }
  };

  return (
    <div className={styles.wrapper}>
      <input type="number" className={styles.input} value={value} onChange={handleOnChange} />

      <span className={styles.course}>{exchangeCourse}</span>
    </div>
  );
};
