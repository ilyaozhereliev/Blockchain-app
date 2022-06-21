import React, { FC } from 'react';

import styles from './InputCurrency.module.scss';
import { getClearedValue, isNumeric } from './InputCurrency.utils';

interface InputCurrencyProps {
  value: number;
  editable: boolean;

  description?: string;

  onChange?: (value: number) => void;
}

export const InputCurrency: FC<InputCurrencyProps> = ({
  value,
  editable,
  description,

  onChange = null,
}) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    /**  Если инпут только для чтения, то  мы выхоидм отсюда * */
    if (!editable || !onChange) return;

    /** Строка без пробелов * */
    const clearedValue = getClearedValue(event.target.value);

    /** Удаляем из строки без пробелов все символы, которые НЕ числа
     * И если длина останется такой-же, то это число
     * * */
    const isCorrectNumber = isNumeric(clearedValue);

    /** Если это НЕ число, то выходим * */
    if (!isCorrectNumber) return;

    onChange(Number(clearedValue));
  };

  // Логика:
  // значение инпутов у нас хранится только в inputsData
  //  и мы тут это значение приобразуем в строку с разделителями
  const inputValue = value.toLocaleString();

  return (
    <div className={styles.input}>
      <input
        type="text"
        value={inputValue}
        className={styles.input__input}
        onChange={handleOnChange}
      />
      <span className={styles.input__course}>{description}</span>
    </div>
  );
};
