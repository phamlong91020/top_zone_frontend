import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppLayout } from '@/components';
import { lazyImport } from './utils';
import { ERoute } from './enums';

const { Home } = lazyImport(() => import('@/modules'), 'Home');

export const AppRouter: FC = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path={ERoute.HOME} element={<AppLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
