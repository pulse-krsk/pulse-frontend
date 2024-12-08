import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { useEffect } from 'react';
import { actions, selectors } from '../model';
import { useNavigate } from 'react-router-dom';

/**
 * Hook to handle OAuth login.
 *
 * This hook dispatches a login action with the provided token when the token changes.
 *
 * @param token - The OAuth token to use for login, or null if not available.
 */
export const useOauthLogin = (token: string | null) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const enterAsAdmin = useAppSelector(selectors.getEnterAsAdmin);
  useEffect(() => {
    if (token) {
      dispatch(actions.login({ token, enterAsAdmin }));
    }
  }, [token, dispatch, enterAsAdmin, navigate]);
};
