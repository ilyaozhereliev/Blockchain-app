import { useEffect, useState } from 'react';

import { CurrenciesEnum } from '../pages/Converter/Converter.types';
import { useRequest } from './useRequest';

/** REQUEST * */
export interface CurrencyData {
  coin: CurrenciesEnum;
  id: string;
  name: string;
  price: number;
}

export interface CurrenciesDataResponse {
  /** у нас массив, в котором каждый элемент имеет тип CurrencyData * */
  data: CurrencyData[];
}

export type CurrenciesData = {
  [key in CurrenciesEnum]: {
    id: string;
    name: CurrenciesEnum;
    price: number;
  };
};

export interface CurrenciesDataHook {
  data: CurrenciesData | null;
  isLoading: boolean;
  isHasError: boolean;
}

// Хук, делающий запрос
export const useCurrenciesData = () => {
  const [currenciesData, setCurrenciesData] = useState<CurrenciesData | null>(null);
  const { data, isLoading, isHasError } = useRequest<CurrenciesDataResponse>(
    'https://api.minerstat.com/v2/coins?list=BTC,ETH',
    {},
    [],
  );

  useEffect(() => {
    if (data) {
      /** В initialState, который передается в reduce,
       * уже лежит доллар и его push'ить в data.data из ответа не нужно * */
      const initialState = {
        [CurrenciesEnum.USD]: {
          id: String(new Date().getTime()),
          name: CurrenciesEnum.USD,
          price: 1,
        },
      };

      /** передаем Generic<CurrenciesData>,
       который типизирует возвращаемый результат из reduce * */
      const currencies = data.data.reduce<CurrenciesData>(
        (acc, item) => ({
          ...acc,
          [CurrenciesEnum[item.coin]]: {
            id: item.id,
            name: item.coin,
            price: item.price,
          },
        }),
        /** as - утверждения типа
         * https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions
         *
         * С помощью "as" мы подсказываем компилятору typescript, что имеено это за тип
         * и дальше typescript везде воспринимает вашу сущность c именно таким типом
         * * */
        initialState as CurrenciesData,
      );

      console.log('### currencies', currencies);
      setCurrenciesData(currencies);
    }
  }, [data]);

  return { currenciesData, isLoading, isHasError };
};
