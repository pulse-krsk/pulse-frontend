import type { CamelToSnakeCase } from '@/shared/types';

export type EventsSearchParams = Partial<{
  page: number;
  title: string;
  startDate: string;
  endDate: string;
  types: string[];
  priceFrom: number;
  priceTo: number;
}>;

export type EventParams = {
  eventId: string;
};

export type EventsSearchParamsSnakeCase = CamelToSnakeCase<keyof EventsSearchParams>;
