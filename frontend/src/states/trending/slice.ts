import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createCallApiAsyncAction } from 'utils/createAsyncAction';
import { getTrendingCoinApi } from 'apis/crypto';
import { ITrendingSearchData } from 'types';

export interface TrendingCoinState {
  loading: boolean | null;
  error: string | null;
  data: ITrendingSearchData | null;
}

export const initialState: TrendingCoinState = {
  loading: false,
  error: null,
  data: null,
};

export const getTrendingList = createCallApiAsyncAction('trending/list', getTrendingCoinApi);

export const trendingSlice = createSlice({
  name: 'trending',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getTrendingList.pending, (state) => ({
      ...state,
      loading: true,
      error: null,
    }));
    builder.addCase(getTrendingList.fulfilled, (state: any, action) => ({
      ...state,
      loading: false,
      error: null,
      data: action.payload,
    }));
    builder.addCase(getTrendingList.rejected, (state, action: PayloadAction<any>) => ({
      ...state,
      loading: false,
      data: null,
      error: action.payload?.error || null,
    }));
  },
});

export const trendingReducer = trendingSlice.reducer;
