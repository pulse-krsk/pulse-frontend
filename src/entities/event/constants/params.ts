import type { EventsSearchParamsSnakeCase } from '../types';

export const EVENTS_SEARCH_PARAMS = {
  PAGE: 'page',
  TITLE: 'title',
  START_DATE: 'start_date',
  END_DATE: 'end_date',
  TYPES: 'types',
  PRICE_FROM: 'price_from',
  PRICE_TO: 'price_to',
} satisfies Record<Uppercase<EventsSearchParamsSnakeCase>, EventsSearchParamsSnakeCase>;

export const PAGE_DEFAULT_VALUE = 0;

export const TITLE_DEFAULT_VALUE = '';

export const PRICE_FROM_DEFAULT_VALUE = 0;

export const PRICE_TO_DEFAULT_VALUE = Infinity;
