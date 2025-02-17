import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createCallApiAsyncAction } from 'utils/createAsyncAction';
import { getGlobalApi, getMarketCoinApi } from 'apis/crypto';
import { ICoinMarketData, IGlobalMarketData } from 'types';
export interface ICryptoState {
  loading: boolean | null;
  error: string | null;
  global: IGlobalMarketData | null;
  market: ICoinMarketData[] | null;
}

export const initialState: ICryptoState = {
  loading: false,
  error: null,
  global: null,
  market: null,
};

export const getGlobal = createCallApiAsyncAction('crypto/global', getGlobalApi);
export const getMarket = createCallApiAsyncAction('crypto/market', getMarketCoinApi);

export const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getGlobal.pending, (state) => ({
      ...state,
      loading: true,
      error: null,
      global: null,
    }));
    builder.addCase(getGlobal.fulfilled, (state: any, action) => ({
      ...state,
      loading: false,
      error: null,
      global: action.payload.data,
    }));
    builder.addCase(getGlobal.rejected, (state, action: PayloadAction<any>) => ({
      ...state,
      loading: false,
      global: null,
      error: action.payload?.error || null,
    }));
    builder.addCase(getMarket.pending, (state) => ({
      ...state,
      loading: true,
      error: null,
      market: null,
    }));
    builder.addCase(getMarket.fulfilled, (state: any, action) => ({
      ...state,
      loading: false,
      error: null,
      market: action.payload,
    }));
    builder.addCase(getMarket.rejected, (state, action: PayloadAction<any>) => ({
      ...state,
      loading: false,
      market: null,
      error: action.payload?.error || null,
    }));
  },
});

export const cryptoReducer = cryptoSlice.reducer;
