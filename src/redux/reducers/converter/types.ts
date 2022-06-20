import { CurrenciesEnum } from '../../../pages/Converter/Converter.types';
import { CONVERTER_ACTION_TYPES } from './action-types';

// state ____________________________________________________
export interface Converter {
  inputTab: CurrenciesEnum;
  outputTab: CurrenciesEnum;

  input: number;
  inputExchangeCourse: number;
  output: number;
  outputExchangeCourse: number;
}

// actions _________________________________________________________
export interface SelectedInputTabAction {
  type: CONVERTER_ACTION_TYPES.SELECT_INPUT_TAB;
  payload: CurrenciesEnum;
}

export interface SelectedOutputTabAction {
  type: CONVERTER_ACTION_TYPES.SELECT_OUTPUT_TAB;
  payload: CurrenciesEnum;
}

export interface ReverseTabsAction {
  type: CONVERTER_ACTION_TYPES.REVERSE_TABS;
}

export interface ChangeInputAction {
  type: CONVERTER_ACTION_TYPES.CHANGE_INPUT;
  payload: number;
}

export interface ChangeOutputAction {
  type: CONVERTER_ACTION_TYPES.CHANGE_OUTPUT;
  payload: number;
}

export interface ChangeInputExchangeCourseAction {
  type: CONVERTER_ACTION_TYPES.CHANGE_INPUT_EXCHANGE_COURSE;
  payload: number;
}

export interface ChangeOutputExchangeCourseAction {
  type: CONVERTER_ACTION_TYPES.CHANGE_OUTPUT_EXCHANGE_COURSE;
  payload: number;
}

export type ConverterAction =
  | SelectedInputTabAction
  | SelectedOutputTabAction
  | ReverseTabsAction
  | ChangeInputAction
  | ChangeOutputAction
  | ChangeInputExchangeCourseAction
  | ChangeOutputExchangeCourseAction;
