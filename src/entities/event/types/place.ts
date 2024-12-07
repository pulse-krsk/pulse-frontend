import type { BaseEntity } from '@/shared/types';
import type { Address } from './address';

export type Place = BaseEntity & {
  address: Address;
  latitude: number;
  longitude: number;
};
