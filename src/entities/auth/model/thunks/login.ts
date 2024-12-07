import { createAsyncThunk } from '@reduxjs/toolkit';
import type { LoginRequest } from '../../types';
import { REDUCER_PATH } from '../consts';
import { loginMutation, API_PATHS } from '../../api';
import { joinPaths } from '@/shared/lib';

const login = createAsyncThunk(
  joinPaths(REDUCER_PATH, API_PATHS.LOGIN),
  async (credentials: LoginRequest, { rejectWithValue, dispatch }) => {
    try {
      const { error, data } = await dispatch(loginMutation(credentials));

      if (error) {
        return rejectWithValue(error);
      }
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export { login };
