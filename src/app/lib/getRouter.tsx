import { HomePage } from '@/pages/home';
import { HomeLayout } from '@/pages/home/layout';
import { AuthLayout, LoginPage, YaOauthHelpPage } from '@/pages/auth';
import { EventsPage } from '@/pages/events';
import { ROUTER_PATHS } from '@/shared/constants';
import type { RouteObject } from 'react-router-dom';
import { createBrowserRouter, Navigate } from 'react-router-dom';

export const getRouter = (isAuth: boolean) => {
  const router: RouteObject[] = [];

  if (!isAuth) {
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
          {
            path: ROUTER_PATHS.EVENTS,
            element: <EventsPage />,
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
        element: <AuthLayout />,
        children: [
          {
            index: true,
            element: <LoginPage />,
          },
          {
            path: ROUTER_PATHS.YA_OAUTH_HELP,
            element: <YaOauthHelpPage />,
          },
        ],
      },
    );
  }

  return createBrowserRouter(router);
};
