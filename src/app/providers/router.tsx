import { RouterProvider as ReactRouterProvider } from 'react-router-dom';
import { getRouter } from '../lib';
import { useAppSelector } from '../hooks';
import { selectors } from '@/entities/auth/model';

export const RouterProvider = () => {
  const isAuth = useAppSelector(selectors.getIsAuth);
  const isInit = useAppSelector(selectors.getIsInit);

  if (!isInit) return null;
  const router = getRouter(isAuth);

  return <ReactRouterProvider router={router} />;
};
