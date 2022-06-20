import { applyMiddleware, createStore } from 'redux';

import { composeEnhancers, middleware } from './middleweare';
import rootReducer from './reducers';

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));

export default store;

export type RootState = ReturnType<typeof rootReducer>;
