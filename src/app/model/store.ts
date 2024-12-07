import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { authApi } from '@/entities/auth/api';
import { reducer as authReducer, REDUCER_PATH as AUTH_REDUCER_PATH } from '@/entities/auth/model';
import { eventApi } from '@/entities/event/api';
import { userApi } from '@/entities/user/api';
import { reviewApi } from '@/entities/review/api/api';

export const mainReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [AUTH_REDUCER_PATH]: authReducer,
  [eventApi.reducerPath]: eventApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [reviewApi.reducerPath]: reviewApi.reducer,
});

export const store = configureStore({
  reducer: mainReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      eventApi.middleware,
      userApi.middleware,
      reviewApi.middleware,
    ),
});
