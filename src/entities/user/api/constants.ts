import { joinPaths } from '@/shared/lib';

export const REDUCER_API_PATH = 'userApi';

export const BASE_URL = 'users';

export const KEEP_UNUSED_DATA_FOR = 10 * 60; // 10 minutes

export const API_PATHS = {
  GET_PROFILE: BASE_URL,
  SET_EVENT_TYPES: joinPaths(BASE_URL, 'event-types'),
  TOGGLE_EMAIL_NOTIFICATION: joinPaths(BASE_URL, 'email-notifications'),
} as const;

export const TAGS = {
  USERS: 'users',
} as const;
