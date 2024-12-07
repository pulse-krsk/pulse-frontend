import { createApi } from '@reduxjs/toolkit/query/react';
import { API_PATHS, KEEP_UNUSED_DATA_FOR, REDUCER_API_PATH, TAGS } from './constants';
import { baseQuery } from '@/shared/api';
import type { AddReviewRequest, GetReviewsResponse } from '../types';
import { getControllerSignal, joinPaths } from '@/shared/lib';
import snakify from 'snakify-ts';
import { BASE_URL as EVENT_BASE_URL } from '@/entities/event/api/constants';

const TAG_TYPES = Object.values(TAGS);

export const reviewApi = createApi({
  reducerPath: REDUCER_API_PATH,
  baseQuery: baseQuery,
  keepUnusedDataFor: KEEP_UNUSED_DATA_FOR,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  tagTypes: TAG_TYPES,
  endpoints: (builder) => ({
    getReviews: builder.query<GetReviewsResponse, string>({
      query: (eventId) => ({
        url: joinPaths(EVENT_BASE_URL, eventId, API_PATHS.GET_REVIEWS),
        signal: getControllerSignal(),
      }),
      providesTags: (_result, _error, advertisementId) => [
        { type: TAGS.REVIEWS, id: advertisementId },
      ],
    }),
    addReview: builder.mutation<void, AddReviewRequest>({
      query: ({ eventId, ...body }) => ({
        url: joinPaths(EVENT_BASE_URL, eventId, API_PATHS.ADD_REVIEW),
        body: snakify(body),
        method: 'POST',
      }),
      invalidatesTags: [TAGS.REVIEWS],
    }),
  }),
});

export const { useGetReviewsQuery, useAddReviewMutation } = reviewApi;
