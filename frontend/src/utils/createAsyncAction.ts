import { createAsyncThunk } from '@reduxjs/toolkit';

export const createCallApiAsyncAction = <T, R>(actionName: string, asyncAction: (params: T) => Promise<R>) =>
  createAsyncThunk(actionName, async (params: T, thunkAPI) => {
    try {
      const response = await asyncAction(params);
      return response;
    } catch (e: any) {
      const error = e?.response || null;
      return thunkAPI.rejectWithValue({
        error: error.data,
      });
    }
  });
