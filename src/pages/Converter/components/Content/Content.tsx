/* eslint-disable implicit-arrow-linebreak */
import React, { FC } from 'react';

import { arrows } from '../../../../assets/icons';
import { CurrenciesData } from '../../../../types';
import { InputCurrency } from '../../../Personal';
import { CurrencyTabs } from '../CurrencyTabs';
import { useContent } from './Content.hooks';
import styles from './Content.module.scss';

interface ContentProps {
  currenciesData: CurrenciesData;
}

export const Content: FC<ContentProps> = ({ currenciesData }) => {
  const {
    selectInputTab,
    converterData,
    exchangeInputCourse,
    changeInput,
    reverseTabs,
    exchangeOutputCourse,
    selectOutputTab,
  } = useContent(currenciesData);

  return (
    <div className={styles.calculator}>
      <div>
        <CurrencyTabs
          title="У меня есть"
          handleOnClick={selectInputTab}
          selectedCurrency={converterData.inputTab}
        />
        <InputCurrency
          editable
          value={converterData.input}
          description={exchangeInputCourse}
          onChange={changeInput}
        />
      </div>

      <div className={styles.arrows__wrapper}>
        <button className={styles.arrows__button} type="button" onClick={reverseTabs}>
          <img className={styles.arrows__img} src={arrows} alt="" />
        </button>
      </div>

      <div>
        <CurrencyTabs
          title="Хочу приобрести"
          selectedCurrency={converterData.outputTab}
          handleOnClick={selectOutputTab}
        />
        <InputCurrency
          editable={false}
          value={converterData.output}
          description={exchangeOutputCourse}
        />
      </div>
    </div>
  );
};
