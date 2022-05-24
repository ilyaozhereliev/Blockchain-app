import React, { FC } from 'react';

import { arrows } from '../../assets/icons';
import { Wrapper } from '../../components';
import { CurrencyTabs, InputCurrency } from './components';
import { useConverter } from './Converter.hook';
import styles from './Converter.module.scss';
import { ConversionHookData } from './Converter.types';

export const ConverterPage: FC = () => {
  // eslint-disable-next-line operator-linebreak
  const {
    data,
    isLoading,
    isHasError,
    tabsData,
    handleOnReverseTabs,
    handleOnChangeSelectedCurrency,
    handleOnChangeSelectedConversionCurrency,
    inputsData,
    handleOnChangeInput,
  }: ConversionHookData = useConverter();

  if (isLoading) {
    return <h1>Загрузка</h1>;
  }

  if (isHasError) {
    return <h1>Ошибка</h1>;
  }

  console.log('### data', data);

  // _____________________________________Разметка___________________________________________
  return (
    <Wrapper pageName="Конвертер">
      <div className={styles.input}>
        {/* ______________________________Компонент______________________________ */}
        {/* handleOnClick - обработчик собитий, срабатывающий по нажатию
          selectedCurrency - строка с выбранной валютой_________________________ */}
        <CurrencyTabs
          handleOnClick={handleOnChangeSelectedCurrency}
          selectedCurrency={tabsData.selectedCurrency}
          title="У меня есть"
        />
        {/* ______________________________Компонент_______________________________ */}
        {/* value - значение инпута
          editable - можно ли менять инпут или нет
          exchangeCourse - строка соотношения
          onChange - обработчик события____________________________________________ */}
        <InputCurrency
          value={inputsData.selectedInput}
          editable
          exchangeCourse="1 === 1"
          onChange={handleOnChangeInput}
        />
      </div>

      {/* _______________________________Reverse button__________________________________ */}
      <div className={styles.arrows__wrapper}>
        <button className={styles.arrows__button} type="button" onClick={handleOnReverseTabs}>
          <img className={styles.arrows__img} src={arrows} alt="Exchange change" />
        </button>
      </div>

      {/* ___________Повторение логики для output'a правой стороны страницы____________ */}
      <div className={styles.input}>
        <CurrencyTabs
          handleOnClick={handleOnChangeSelectedConversionCurrency}
          selectedCurrency={tabsData.selectedConversionCurrency}
          title="Хочу приобрести"
        />
        <InputCurrency
          value={inputsData.selectedConversionInput}
          editable={false}
          exchangeCourse="1 === 1"
        />
      </div>
    </Wrapper>
  );
};
