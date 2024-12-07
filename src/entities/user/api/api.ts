import { createApi } from '@reduxjs/toolkit/query/react';
import { API_PATHS, KEEP_UNUSED_DATA_FOR, REDUCER_API_PATH, TAGS } from './constants';
import { baseQuery, METHODS } from '@/shared/api';
import type {
  GetProfileResponse,
  SetEventTypesRequest,
  ToggleEmailNotificationRequest,
} from '../types';
import { getControllerSignal, joinPaths } from '@/shared/lib';

export const userApi = createApi({
  reducerPath: REDUCER_API_PATH,
  baseQuery: baseQuery,
  keepUnusedDataFor: KEEP_UNUSED_DATA_FOR,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  endpoints: (builder) => ({
    getProfile: builder.query<GetProfileResponse, string>({
      query: (userId) => ({
        url: joinPaths(API_PATHS.GET_PROFILE, userId),
        signal: getControllerSignal(),
      }),
      providesTags: (_result, _error, userId) => [{ type: TAGS.USERS, id: userId }],
    }),
    setEventTypes: builder.mutation<void, SetEventTypesRequest>({
      query: (body) => ({
        url: API_PATHS.SET_EVENT_TYPES,
        body,
        method: METHODS.POST,
      }),
      invalidatesTags: [TAGS.USERS],
    }),
    toggleEmailNotification: builder.mutation<void, ToggleEmailNotificationRequest>({
      query: (params) => ({
        url: API_PATHS.SET_EVENT_TYPES,
        params,
        method: METHODS.POST,
      }),
      invalidatesTags: [TAGS.USERS],
    }),
  }),
});

export const { useGetProfileQuery, useSetEventTypesMutation, useToggleEmailNotificationMutation } =
  userApi;