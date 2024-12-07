import { useAppDispatch } from '@/app/hooks';
import { useEffect } from 'react';
import { actions } from '../model';

/**
 * Hook to handle OAuth login.
 *
 * This hook dispatches a login action with the provided token when the token changes.
 *
 * @param token - The OAuth token to use for login, or null if not available.
 */
export const useOauthLogin = (token: string | null) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (token) {
      dispatch(actions.login({ token }));
    }
  }, [token, dispatch]);
};
