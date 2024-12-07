import type { ThunkError, ThunkStatus } from './thunk';

export type DefaultState = {
  status: ThunkStatus;
  errors: ThunkError[];
};
