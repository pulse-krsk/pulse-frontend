import type { Event } from './event';

export type GetEventsResponse = {
  data: Event[];
};

export type GetClosestEventsResponse = Event[];

export type GetEventResponse = Event;

export type GetEventTypesResponse = { type: string }[];
