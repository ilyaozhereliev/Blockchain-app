import { useEffect } from 'react';

import { useRequest } from '../../hooks/useRequest';
import { CurrenciesDataResponse, CurrenciesEnum } from './Converter.types';

export const useCurrenciesData = () => {
  const { data, isLoading, isHasError } = useRequest<CurrenciesDataResponse>(
    'https://api.minerstat.com/v2/coins?list=BTC,ETH',
    {},
    [],
  );

  useEffect(() => {
    if (data) {
      data.data.push({
        coin: CurrenciesEnum.USD,
        id: String(new Date().getTime()),
        name: 'Dollar',
        price: 1,
      });
    }
  }, [data]);

  return { data, isLoading, isHasError };
};
