import type { BaseEntity } from '@/shared/types';

export type Event = BaseEntity & {
  img: string;
  title: string;
  description: string;
  price: number;
  start_time: Date;
  end_time: Date;
  age_restriction: number;
  types: { type: string }[];
};
