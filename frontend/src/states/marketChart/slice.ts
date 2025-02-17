import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createCallApiAsyncAction } from 'utils/createAsyncAction';
import { getCoinMarketChartApi } from 'apis/crypto';
import { IMarketChartData } from 'types';
export interface MarketChartState {
  loading: boolean | null;
  error: string | null;
  data: IMarketChartData | null;
}

export const initialState: MarketChartState = {
  loading: false,
  error: null,
  data: null,
};

export const getCoinMarketChart = createCallApiAsyncAction('crypto/coinMarketChart', getCoinMarketChartApi);

export const marketChartSlice = createSlice({
  name: 'marketChart',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getCoinMarketChart.pending, (state) => ({
      ...state,
      loading: true,
      error: null,
      data: null,
    }));
    builder.addCase(getCoinMarketChart.fulfilled, (state: any, action) => ({
      ...state,
      loading: false,
      error: null,
      data: action.payload,
    }));
    builder.addCase(getCoinMarketChart.rejected, (state, action: PayloadAction<any>) => ({
      ...state,
      loading: false,
      data: null,
      error: action.payload?.error || null,
    }));
  },
});

export const marketChartReducer = marketChartSlice.reducer;
