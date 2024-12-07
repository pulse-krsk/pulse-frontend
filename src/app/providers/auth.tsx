import { useEffect } from 'react';
import type { DefaultProps } from '@/shared/types';
import { useAppDispatch } from '../hooks';
import { actions } from '@/entities/auth/model';

export const AuthProvider = ({ children }: DefaultProps) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(actions.refresh());
  }, [dispatch]);

  return children;
};
