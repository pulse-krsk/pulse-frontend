import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { authApi } from '@/entities/auth/api';
import { reducer as authReducer, REDUCER_PATH as AUTH_REDUCER_PATH } from '@/entities/auth/model';

export const mainReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [AUTH_REDUCER_PATH]: authReducer,
});

export const store = configureStore({
  reducer: mainReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
});
