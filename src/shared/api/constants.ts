import { SERVER_URL } from '../constants';

export const METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
} as const;

export const API_VERSION = 'v1';

export const API_PREFIX = 'api';

export const BASE_API_URL = SERVER_URL;
