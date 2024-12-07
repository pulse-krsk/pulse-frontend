import type { User } from '@/entities/user/types';
import type { BaseEntity } from '@/shared/types';

export type Review = BaseEntity & {
  user: User;
  rating: number;
  body?: string;
};
