export const REDUCER_API_PATH = 'reviewsApi';

export const BASE_URL = 'reviews';

export const KEEP_UNUSED_DATA_FOR = 10 * 60; // 10 minutes

export const API_PATHS = {
  GET_REVIEWS: BASE_URL,
  ADD_REVIEW: BASE_URL,
} as const;

export const TAGS = {
  REVIEWS: 'reviews',
} as const;
