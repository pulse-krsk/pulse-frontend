import { createApi } from '@reduxjs/toolkit/query/react';
import { API_PATHS, KEEP_UNUSED_DATA_FOR, REDUCER_API_PATH, TAGS } from './constants';
import { baseQuery } from '@/shared/api';
import type {
  GetEventResponse,
  GetEventsRequest,
  GetEventsResponse,
  GetEventTypesResponse,
} from '../types';
import { getControllerSignal, joinPaths } from '@/shared/lib';
import snakify from 'snakify-ts';

const TAG_TYPES = Object.values(TAGS);

export const eventApi = createApi({
  reducerPath: REDUCER_API_PATH,
  baseQuery: baseQuery,
  keepUnusedDataFor: KEEP_UNUSED_DATA_FOR,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  tagTypes: TAG_TYPES,
  endpoints: (builder) => ({
    getEvents: builder.query<GetEventsResponse, GetEventsRequest>({
      query: (params) => ({
        url: API_PATHS.GET_EVENTS,
        params: snakify(params),
        signal: getControllerSignal(),
      }),
      providesTags: (_result, _error, params) => [
        { type: TAGS.EVENTS, id: JSON.stringify(params) },
      ],
    }),
    getEvent: builder.query<GetEventResponse, string>({
      query: (advertisementId) => ({
        url: joinPaths(API_PATHS.GET_EVENT, advertisementId),
        signal: getControllerSignal(),
      }),
      providesTags: (_result, _error, advertisementId) => [
        { type: TAGS.EVENTS, id: advertisementId },
      ],
    }),
    getEventTypes: builder.query<GetEventTypesResponse, void>({
      query: () => ({
        url: joinPaths(API_PATHS.GET_EVENT_TYPES),
        signal: getControllerSignal(),
      }),
      providesTags: () => [{ type: TAGS.EVENT_TYPES }],
    }),
    getClosestEvents: builder.query<GetEventsResponse, void>({
      query: () => ({
        url: joinPaths(API_PATHS.GET_CLOSEST_EVENTS),
        signal: getControllerSignal(),
      }),
    }),
  }),
});

export const {
  useGetEventQuery,
  useGetEventsQuery,
  useGetEventTypesQuery,
  useGetClosestEventsQuery,
} = eventApi;
