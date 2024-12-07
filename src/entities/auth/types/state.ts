import type { DefaultState } from '@/shared/types';
import type { User } from '@/entities/user/types';

export type AuthState = DefaultState & {
  user?: User;
  isAuth: boolean;
  isInit: boolean;
};
