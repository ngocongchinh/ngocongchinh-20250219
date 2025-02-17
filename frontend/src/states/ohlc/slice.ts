import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createCallApiAsyncAction } from 'utils/createAsyncAction';
import { getOhlcChartApi } from 'apis/crypto';
export interface OhlcState {
  loading: boolean | null;
  error: string | null;
  data: any;
}

export const initialState: OhlcState = {
  loading: false,
  error: null,
  data: null,
};

export const getOhlcChart = createCallApiAsyncAction('crypto/ohlcChart', getOhlcChartApi);

export const ohlcSlice = createSlice({
  name: 'ohlc',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getOhlcChart.pending, (state) => ({
      ...state,
      loading: true,
      error: null,
      data: null,
    }));
    builder.addCase(getOhlcChart.fulfilled, (state: any, action) => ({
      ...state,
      loading: false,
      error: null,
      data: action.payload,
    }));
    builder.addCase(getOhlcChart.rejected, (state, action: PayloadAction<any>) => ({
      ...state,
      loading: false,
      data: null,
      error: action.payload?.error || null,
    }));
  },
});

export const ohlcReducer = ohlcSlice.reducer;
