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
    tabsData,
    handleOnReverseTabs,
    handleOnChangeSelectedCurrency,
    handleOnChangeSelectedConversionCurrency,
    inputsData,
    handleOnChangeInput,
  }: ConversionHookData = useConverter();

  return (
    <Wrapper>
      <h1 className={styles.title}>Конвертер</h1>
      <CurrencyTabs
        handleOnClick={handleOnChangeSelectedCurrency}
        selectedCurrency={tabsData.selectedCurrency}
        title="У меня есть"
      />
      <InputCurrency
        value={inputsData.selectedInput}
        editable
        exchangeCourse="1 === 1"
        onChange={handleOnChangeInput}
      />
      <br />
      <div className={styles.arrows}>
        <button className={styles.arrows__button} type="button" onClick={handleOnReverseTabs}>
          <img className={styles.arrows__img} src={arrows} alt="" />
        </button>
      </div>
      <br />

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
    </Wrapper>
  );
};
