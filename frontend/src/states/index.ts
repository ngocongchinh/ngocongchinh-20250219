import { useMemo } from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { useDispatch } from 'react-redux';
import rootReducer from './rootReducer';
import { updateVersion } from './global';

const PERSISTED_KEYS: string[] = ['global', 'trending', 'crypto', 'marketChart', 'ohlc', 'coinDetail'];

const persistConfig = {
  key: 'primary',
  whitelist: PERSISTED_KEYS,
  blacklist: [],
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// eslint-disable-next-line import/no-mutable-exports
let store: ReturnType<typeof makeStore>;

export function makeStore(preloadedState = undefined) {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: true,
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
    devTools: process.env.NODE_ENV === 'development',
    preloadedState,
  });
}

export const initializeStore = (preloadedState: any = undefined) => {
  let _store = store ?? makeStore(preloadedState);
  if (preloadedState && store) {
    _store = makeStore({
      ...store.getState(),
      ...preloadedState,
    });
    store = undefined as any;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;

  // Create the store once in the client
  if (!store) {
    store = _store;
  }

  return _store;
};

store = initializeStore();

/**
 * @see https://redux-toolkit.js.org/usage/usage-with-typescript#getting-the-dispatch-type
 */
export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;
export type RootState = ReturnType<typeof rootReducer>;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;

export const persistor = persistStore(store, undefined, () => {
  store.dispatch(updateVersion());
});

export function useStore(initialState: RootState) {
  return useMemo(() => initializeStore(initialState), [initialState]);
}
