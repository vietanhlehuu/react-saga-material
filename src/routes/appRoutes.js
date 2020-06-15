import React, { lazy } from 'react';
import { RoutePath } from 'constants/constants';
import { Redirect } from 'react-router-dom';
import AuthLayout from 'components/layouts/auth/AuthLayout';
import NotFound from 'components/pages/not-found/NotFound';

export const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to={RoutePath.login} />,
  },
  {
    path: RoutePath.auth,
    component: AuthLayout,
    routes: [
      {
        path: RoutePath.login,
        exact: true,
        component: lazy(() => import('components/pages/login/Login')),
      },
      {
        path: RoutePath.signup,
        exact: true,
        component: lazy(() => import('components/pages/signup/Signup')),
      },
      {
        component: () => <Redirect to={RoutePath.login} />,
      },
    ],
  },
  {
    path: RoutePath.notFound,
    exact: true,
    component: NotFound,
  },
  {
    component: () => <Redirect to={RoutePath.notFound} />,
  },
];
