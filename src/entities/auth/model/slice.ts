import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { isFulfilled, isPending, isRejected } from '@/shared/lib';
import { login, logout, refresh } from './thunks';
import { REDUCER_PATH } from './consts';
import type { ThunkError } from '@/shared/types';
import type { LoginResponse, RefreshResponse } from '../types';

const AuthSlice = createSlice({
  name: REDUCER_PATH,
  initialState,
  reducers: {},
  selectors: {
    getIsLoading: (state) => state.status === 'pending',
    getIsSuccess: (state) => state.status === 'fulfilled',
    getIsError: (state) => state.status === 'rejected',
    getIsIdle: (state) => state.status === 'idle',
    getIsAuth: (state) => 'user' in state,
    getIsInit: (state) => state.isInit,
    getUser: (state) => state.user,
    getErrors: (state) => state.errors,
    getStatus: (state) => state.status,
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action: PayloadAction<LoginResponse>) => {
        state.user = action.payload;
      })
      .addCase(refresh.fulfilled, (state, action: PayloadAction<RefreshResponse>) => {
        state.user = action.payload;
        state.isInit = true;
      })
      .addCase(refresh.rejected, (state) => {
        state.isInit = true;
      })
      .addCase(logout.fulfilled, (state) => {
        delete state.user;
      })
      .addMatcher(isFulfilled, (state) => {
        state.status = 'fulfilled';
        state.errors = [];
      })
      .addMatcher(isPending, (state) => {
        state.status = 'pending';
        state.errors = [];
      })
      .addMatcher(isRejected, (state, action: PayloadAction<ThunkError>) => {
        state.status = 'rejected';
        state.errors.push(action.payload);
      });
  },
});

const { reducer, selectors } = AuthSlice;

const actions = {
  ...AuthSlice.actions,
  login,
  logout,
  refresh,
};

export { reducer, selectors, actions };
