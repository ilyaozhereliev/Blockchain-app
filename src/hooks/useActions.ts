import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as ConverterActions from '../redux/reducers/converter/action-creators';
import * as WalletActions from '../redux/reducers/wallet/action-creators';

const useActions = () => {
  const dispatch = useDispatch();

  const allActions = {
    ...ConverterActions,
    ...WalletActions,
  };

  return bindActionCreators(allActions, dispatch);
};

export default useActions;
