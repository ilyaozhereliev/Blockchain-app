import React, { FC } from 'react';

import { Wrapper } from '../../components';
import { useCurrenciesData } from '../../hooks';
import { Content } from './components';

export const ConverterPage: FC = () => {
  const { currenciesData, isLoading, isHasError } = useCurrenciesData();

  if (isLoading) {
    return <h1>Загрузка...</h1>;
  }

  if (isHasError || !currenciesData) {
    return <h1>Ошибка</h1>;
  }

  return (
    <Wrapper pageName="Конвертер">
      <Content currenciesData={currenciesData} />
    </Wrapper>
  );
};
