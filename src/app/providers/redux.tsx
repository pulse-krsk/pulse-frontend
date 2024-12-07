import { Provider } from 'react-redux';
import type { DefaultProps } from '@/shared/types';
import { store } from '@/app/model';

export const ReduxProvider = ({ children }: DefaultProps) => (
  <Provider store={store}>{children}</Provider>
);
