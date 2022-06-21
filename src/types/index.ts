export interface PageProps {
  pageUrl: string;
}

export enum CurrenciesEnum {
  BTC = 'BTC',
  ETH = 'ETH',
  USD = 'USD',
}

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
    name: string;
    price: number;
  };
};
