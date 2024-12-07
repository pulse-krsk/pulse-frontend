import { HomePage } from '@/pages/home';
import { HomeLayout } from '@/pages/home/layout';
import { ROUTER_PATHS } from '@/shared/constants';
import type { RouteObject } from 'react-router-dom';
import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';

export const getRouter = (isAuth: boolean) => {
  const router: RouteObject[] = [];

  if (isAuth) {
    router.push(
      {
        path: '*',
        element: <Navigate to={ROUTER_PATHS.HOME} />,
      },
      {
        path: ROUTER_PATHS.HOME,
        element: (
          <>
            <HomeLayout />
          </>
        ),
        children: [
          {
            index: true,
            element: <HomePage />,
          },
        ],
      },
    );
  } else {
    router.push(
      {
        path: '*',
        element: <Navigate to={ROUTER_PATHS.HOME + ROUTER_PATHS.LOGIN} />,
      },
      {
        path: ROUTER_PATHS.HOME + ROUTER_PATHS.LOGIN,
        element: (
          <>
            <div>Login layout</div>
            <Outlet />
          </>
        ),
        children: [
          {
            index: true,
            element: <div>Login</div>,
          },
          {
            path: ROUTER_PATHS.YA_OAUTH_HELP,
            element: <div>Страница для получения токена</div>,
          },
        ],
      },
    );
  }

  return createBrowserRouter(router);
};
