import type { User } from '@/entities/user/types';

export type GetProfileResponse = User & {
  types: string[];
};
