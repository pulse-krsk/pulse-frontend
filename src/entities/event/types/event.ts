import type { BaseEntity } from '@/shared/types';
import type { Place } from './place';

export type Event = BaseEntity & {
  img: string;
  title: string;
  description: string;
  price: number;
  startTime: string;
  endTime: string;
  ageRestriction: number;
  types: { type: string }[];
  place: Place;
};
