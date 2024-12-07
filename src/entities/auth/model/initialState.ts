import type { AuthState } from '../types';

export const initialState: AuthState = {
  isAuth: false,
  isInit: false,
  status: 'idle',
  errors: [],
};
