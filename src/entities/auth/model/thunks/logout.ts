import { createAsyncThunk } from '@reduxjs/toolkit';
import { REDUCER_PATH } from '../consts';
import { API_PATHS, logoutMutation } from '../../api';
import { joinPaths } from '@/shared/lib';

const logout = createAsyncThunk(
  joinPaths(REDUCER_PATH, API_PATHS.LOGOUT),
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const { error, data } = await dispatch(logoutMutation());

      if (error) {
        return rejectWithValue(error);
      }
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export { logout };
