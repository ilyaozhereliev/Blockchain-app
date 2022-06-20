import { CurrenciesEnum } from '../../../pages/Converter/Converter.types';
import { CONVERTER_ACTION_TYPES } from './action-types';
import {
  ChangeInputAction,
  ChangeInputExchangeCourseAction,
  ChangeOutputAction,
  ChangeOutputExchangeCourseAction,
  ReverseTabsAction,
  SelectedInputTabAction,
  SelectedOutputTabAction,
} from './types';

export const selectInputTab = (tabName: CurrenciesEnum): SelectedInputTabAction => ({
  type: CONVERTER_ACTION_TYPES.SELECT_INPUT_TAB,
  payload: tabName,
});

export const selectOutputTab = (tabName: CurrenciesEnum): SelectedOutputTabAction => ({
  type: CONVERTER_ACTION_TYPES.SELECT_OUTPUT_TAB,
  payload: tabName,
});

export const reverseTabs = (): ReverseTabsAction => ({
  type: CONVERTER_ACTION_TYPES.REVERSE_TABS,
});

export const changeInput = (inputValue: number): ChangeInputAction => ({
  type: CONVERTER_ACTION_TYPES.CHANGE_INPUT,
  payload: inputValue,
});

export const changeOutput = (outputValue: number): ChangeOutputAction => ({
  type: CONVERTER_ACTION_TYPES.CHANGE_OUTPUT,
  payload: outputValue,
});

export const changeInputExchangeCourse = (course: number): ChangeInputExchangeCourseAction => ({
  type: CONVERTER_ACTION_TYPES.CHANGE_INPUT_EXCHANGE_COURSE,
  payload: course,
});

export const changeOutputExchangeCourse = (course: number): ChangeOutputExchangeCourseAction => ({
  type: CONVERTER_ACTION_TYPES.CHANGE_OUTPUT_EXCHANGE_COURSE,
  payload: course,
});
