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
  const actionTitle = `${marketAction === 'BUY' ? 'Купить' : 'Продать'} ${selectedCurrency}`;

  const marketTitle = `${marketAction === 'BUY' ? 'USD' : selectedCurrency}`;
  const convertibleCurrencyTitle = marketAction === 'BUY' ? selectedCurrency : 'USD';

  const inputValue = marketAction === 'BUY' ? usdValue : cryptoValue;
  const outputValue = marketAction === 'BUY' ? cryptoValue : usdValue;

  return (
    <div className={styles.modal}>
      <div className={styles.modal_content}>
        <h1 className={styles.modal_title}>{actionTitle}</h1>

        <h2 className={styles.modal_coin}>{marketTitle}</h2>
        <InputCurrency editable value={inputValue} onChange={onChange} />

        <h2 className={styles.modal_coin}>{convertibleCurrencyTitle}</h2>
        <InputCurrency editable={false} value={outputValue} />
      </div>
    </div>
  );
};
