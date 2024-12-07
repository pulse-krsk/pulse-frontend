import type { store } from '../model';

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
