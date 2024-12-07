import {
  type BaseQueryFn,
  type FetchBaseQueryError,
  type FetchArgs,
} from '@reduxjs/toolkit/query/react';
import { baseQuery } from '@/shared/api';
import { API_PATHS } from './consts';
import { actions } from '../model';

export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let res = await baseQuery(args, api, extraOptions);
  if (res.error && res.error.status === 401) {
    const refreshResult = await baseQuery(API_PATHS.REFRESH, api, extraOptions);

    if (refreshResult.data) {
      res = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(actions.logout());
    }
  }
  return res;
};
