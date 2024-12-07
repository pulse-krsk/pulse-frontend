import type { User } from '@/entities/user/types';

export type GetProfileRequest = User & {
  types: string[];
};
export type SetEventTypesRequest = {
  types: string[];
};

export type ToggleEmailNotificationRequest = {
  enable: boolean;
};
