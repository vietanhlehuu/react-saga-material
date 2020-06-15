import React, { Suspense } from 'react';
import '../assets/styles/main.scss';
import { renderRoutes } from 'react-router-config';
import { routes } from 'routes/appRoutes';
import ScrollToTop from './common/scroll-to-top/ScrollToTop';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Suspense fallback={<div>Loading</div>}>{renderRoutes(routes)}</Suspense>
    </div>
  );
}

export default App;
