import type { User } from '@/entities/user/types';

export type GetProfileRequest = User & {
  types: string[];
};
