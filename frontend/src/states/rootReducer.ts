import { Reducer, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { cryptoReducer } from './crypto';
import { trendingReducer } from './trending';
import { marketChartReducer } from './marketChart';
import { ohlcReducer } from './ohlc';
import { coinDetailReducer } from './coinDetail';

const appReducer = combineReducers({
  crypto: cryptoReducer,
  trending: trendingReducer,
  marketChart: marketChartReducer,
  ohlc: ohlcReducer,
  coinDetail: coinDetailReducer,
});

const rootReducer: Reducer = (state: AppState, action) => {
  if (action.type === 'global/resetStore') {
    // this applies to all keys defined in persistConfig(s)
    storage.removeItem('persist:root');
    // eslint-disable-next-line no-param-reassign
    state = {} as AppState;
  }
  return appReducer(state, action);
};

type AppState = ReturnType<typeof appReducer>;

export default rootReducer;
