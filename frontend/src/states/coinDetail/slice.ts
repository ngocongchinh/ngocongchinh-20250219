import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createCallApiAsyncAction } from 'utils/createAsyncAction';
import { getCoinDetailApi } from 'apis/crypto';
import { ICoinDetail } from 'types';

export interface IState {
  loading: boolean | null;
  error: string | null;
  data: ICoinDetail | null;
}

export const initialState: IState = {
  loading: false,
  error: null,
  data: null,
};

export const getCoinDetail = createCallApiAsyncAction('crypto/coinDetail', getCoinDetailApi);

export const coinDetailSlice = createSlice({
  name: 'coinDetail',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getCoinDetail.pending, (state) => ({
      ...state,
      loading: true,
      error: null,
      data: null,
    }));
    builder.addCase(getCoinDetail.fulfilled, (state: any, action) => ({
      ...state,
      loading: false,
      error: null,
      data: action.payload,
    }));
    builder.addCase(getCoinDetail.rejected, (state, action: PayloadAction<any>) => ({
      ...state,
      loading: false,
      data: null,
      error: action.payload?.error || null,
    }));
  },
});

export const coinDetailReducer = coinDetailSlice.reducer;
