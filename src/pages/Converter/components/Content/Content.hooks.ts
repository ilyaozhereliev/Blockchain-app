import { useEffect, useMemo } from 'react';

/* eslint-disable implicit-arrow-linebreak */
import { useTypedSelector } from '../../../../hooks';
import useActions from '../../../../hooks/useActions';
import { Converter } from '../../../../redux/reducers/converter/types';
import { CurrenciesData } from '../../../../types';
import { ContentDataHook } from './Content.types';
import { getExchangeCourse } from './Content.utils';

export const useContent = (currenciesData: CurrenciesData): ContentDataHook => {
  const converterData: Converter = useTypedSelector((state) => state.converter);

  const {
    selectInputTab,
    selectOutputTab,
    reverseTabs,
    changeInput,
    changeInputExchangeCourse,
    changeOutput,
    changeOutputExchangeCourse,
  } = useActions();

  useEffect(() => {
    changeInputExchangeCourse(
      getExchangeCourse(
        currenciesData[converterData.inputTab].price,
        currenciesData[converterData.outputTab].price,
      ),
    );

    changeOutputExchangeCourse(
      getExchangeCourse(
        currenciesData[converterData.outputTab].price,
        currenciesData[converterData.inputTab].price,
      ),
    );
  }, [currenciesData, converterData.inputTab, converterData.outputTab]);

  useEffect(() => {
    changeOutput(converterData.input * converterData.inputExchangeCourse);
  }, [converterData.input, converterData.inputExchangeCourse]);

  const exchangeInputCourse = useMemo(
    () =>
      `1 ${converterData.inputTab} = ${converterData.inputExchangeCourse} ${converterData.outputTab}`,
    [converterData.inputTab, converterData.outputTab, converterData.inputExchangeCourse],
  );

  const exchangeOutputCourse = useMemo(
    () =>
      `1 ${converterData.outputTab} = ${converterData.outputExchangeCourse} ${converterData.inputTab}`,
    [converterData.outputTab, converterData.outputExchangeCourse, converterData.inputTab],
  );

  return {
    converterData,
    selectInputTab,
    selectOutputTab,
    reverseTabs,
    changeInput,
    exchangeInputCourse,
    exchangeOutputCourse,
  };
};
