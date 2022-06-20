import React, { FC, useState } from 'react';

import styles from './InputCurrency.module.scss';

// Создание интерфейса и типизация входных параметров
interface InputCurrencyType {
  value: number;
  editable: boolean;
  exchangeCourse: string;

  onChange?: (value: number) => void;
}

const MAX_LENGTH = 16;

export const InputCurrency: FC<InputCurrencyType> = ({
  value,
  editable,
  exchangeCourse,
  onChange = null,
}) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    // Проверка: 'можно ли изменять компонент?' Если нет - возврат из функции
    // Если инпут только для чтения, то мы выходим отсюда
    if (!editable || !onChange) return;

    const getClearedValue = (val: string): string => val.replace(/\s/gm, '');
    const isNumeric = (str: string): boolean => str.replace(/\D/gm, '').length === str.length;

    // В остальных случаях превращаем инпут в число и передаем onChange
    // Строка без пробелов
    const clearedValue = getClearedValue(event.target.value);
    // даляем из строки без пробелов все символы, которые НЕ числа
    //  И если длина останется такой-же, значит это число
    const isCorrectNumber = isNumeric(clearedValue);

    // Если это не число - выходим
    if (!isCorrectNumber || clearedValue.length > MAX_LENGTH) return;
    onChange(Number(clearedValue));
  };
  const inputValue = value.toLocaleString();

  // _____________________________________Разметка_____________________________________________
  return (
    <div className={styles.wrapper}>
      <input type="text" className={styles.input} value={inputValue} onChange={handleOnChange} />

      <span className={styles.course}>{exchangeCourse}</span>
    </div>
  );
};
