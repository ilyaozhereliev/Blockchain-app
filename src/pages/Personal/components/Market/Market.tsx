import React, { FC } from 'react';

import { CurrenciesEnum } from '../../../../types';
import { InputCurrency } from '../../../Converter/components/InputCurrency';
import { MarketActions } from '../Content';
import styles from '../Content/Content.module.scss';

interface MarketProps {
  selectedCurrency: CurrenciesEnum;
  marketAction: MarketActions;
  usdValue: number;
  cryptoValue: number;

  maxInputValue: number;
  onChange: (value: number) => void;
}

export const Market: FC<MarketProps> = ({
  selectedCurrency,
  marketAction,
  usdValue,
  cryptoValue,
  maxInputValue,
  onChange,
}) => {
  /** TODO: отрефакторить! * */
  const title = `Мы работаем с ${selectedCurrency}`;
  const actionTitle = `и мы будем ${marketAction === 'BUY' ? 'покупать' : 'продавать'}`;

  const marketTitle = `${marketAction === 'BUY' ? 'Dollar' : selectedCurrency} to`;
  const convertibleCurrencyTitle = marketAction === 'BUY' ? selectedCurrency : 'Dollars';

  const inputValue = marketAction === 'BUY' ? usdValue : cryptoValue;
  const outputValue = marketAction === 'BUY' ? cryptoValue : usdValue;

  return (
    <div className={styles.action}>
      <div>
        <h2>{title}</h2>

        <h3>{actionTitle}</h3>
      </div>

      <h1>{marketTitle}</h1>

      <InputCurrency editable value={inputValue} onChange={onChange} />

      <h1>{convertibleCurrencyTitle}</h1>

      <InputCurrency editable={false} value={outputValue} />
    </div>
  );
};
