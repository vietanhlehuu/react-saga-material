import React, { Suspense } from 'react';
import { renderRoutes } from 'react-router-config';
import Topbar from './components/Topbar';

const AuthLayout = ({ route }) => {
  return (
    <>
      <Topbar />
      <main>
        <Suspense fallback={<div>Loading</div>}>
          {renderRoutes(route.routes)}
        </Suspense>
      </main>
    </>
  );
};

export default AuthLayout;
