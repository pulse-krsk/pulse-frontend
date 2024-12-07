import { createAsyncThunk } from '@reduxjs/toolkit';
import { REDUCER_PATH } from '../consts';
import { API_PATHS, refreshMutation } from '../../api';
import { joinPaths } from '@/shared/lib';

const refresh = createAsyncThunk(
  joinPaths(REDUCER_PATH, API_PATHS.REFRESH),
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const { error, data } = await dispatch(refreshMutation());

      if (error) {
        return rejectWithValue(error);
      }
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export { refresh };
