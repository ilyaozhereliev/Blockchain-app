import React, { FC } from 'react';

import { Wrapper } from '../../components';
import { useCurrenciesData } from '../../hooks';
import { Content } from './components';

export const PersonalPage: FC = () => {
  const { currenciesData, isLoading, isHasError } = useCurrenciesData();

  if (isLoading) {
    return <h1>Загрузка...</h1>;
  }

  if (isHasError || !currenciesData) {
    return <h1>Всё сломалось :(</h1>;
  }

  return (
    <Wrapper pageName="Портфель">
      <Content currenciesData={currenciesData} />
    </Wrapper>
  );
};
