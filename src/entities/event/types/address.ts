import type { BaseEntity } from '@/shared/types';

export type Address = BaseEntity & {
  city: string;
  street: string;
  building: string;
};
