import { SERVER_URL } from '../constants';
import { joinPaths } from '../lib';

export const METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
} as const;

export const API_VERSION = 'v1';

export const API_PREFIX = 'api';

export const BASE_API_URL = joinPaths(SERVER_URL, API_PREFIX, API_VERSION);
