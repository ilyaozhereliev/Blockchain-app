import { Converter } from '../../../../redux/reducers/converter/types';
import { CurrenciesEnum } from '../../Converter.types';

/** CONTENT * */

export interface ContentDataHook {
  converterData: Converter;
  exchangeInputCourse: string;
  exchangeOutputCourse: string;

  selectInputTab: (tabName: CurrenciesEnum) => void;
  selectOutputTab: (tabName: CurrenciesEnum) => void;
  reverseTabs: () => void;
  changeInput: (inputValue: number) => void;
}
