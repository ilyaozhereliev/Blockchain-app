import React, { FC } from 'react';

import styles from './InputCurrency.module.scss';

// Создание интерфейса и типизация входных параметров
interface InputCurrencyType {
  value: number;
  editable: boolean;
  exchangeCourse: string;
  // eslint-disable-next-line react/require-default-props
  onChange?: (value: number) => void;
}

export const InputCurrency: FC<InputCurrencyType> = ({
  value,
  editable,
  exchangeCourse,
  onChange = null,
}) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    // Проверка: 'можно ли изменять компонент?' Если нет - возврат из функции
    if (!editable) return;

    // В отсальных случаях превращаем инпут в число и передаем onChange
    const updatedValue = Number(event.target.value);
    if (onChange) {
      onChange(updatedValue);
    }
  };

  // _____________________________________Разметка_____________________________________________
  return (
    <div className={styles.wrapper}>
      <input type="number" className={styles.input} value={value} onChange={handleOnChange} />

      <span className={styles.course}>{exchangeCourse}</span>
    </div>
  );
};
