export const REDUCER_API_PATH = 'eventApi';

export const BASE_URL = 'events';

export const KEEP_UNUSED_DATA_FOR = 10 * 60; // 10 minutes

export const API_PATHS = {
  GET_EVENTS: BASE_URL,
  GET_EVENT: BASE_URL,
  GET_EVENT_TYPES: 'event-types',
} as const;

export const TAGS = {
  EVENTS: 'events',
  EVENT_TYPES: 'event-types',
} as const;
