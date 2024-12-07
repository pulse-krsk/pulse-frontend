import { joinPaths } from '@/shared/lib';

export const REDUCER_API_PATH = 'authApi';

export const BASE_URL = 'auth';

export const API_PATHS = {
  LOGIN: joinPaths(BASE_URL, 'login'),
  LOGOUT: joinPaths(BASE_URL, 'logout'),
  REFRESH: joinPaths(BASE_URL, 'refresh'),
} as const;
