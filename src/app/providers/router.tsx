import { RouterProvider as ReactRouterProvider } from 'react-router-dom';
import { getRouter } from '../lib';

export const RouterProvider = () => {
  // FIXME: Добавить хук для проверки авторизации
  const isAuth = true;

  const router = getRouter(isAuth);

  return <ReactRouterProvider router={router} />;
};
