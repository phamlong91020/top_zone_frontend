import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppLayout } from '@/components';
import { lazyImport } from './utils';
import { ERoute } from './enums';

const { Home } = lazyImport(() => import('@/modules'), 'Home');
const { ProductDetails } = lazyImport(
  () => import('@/modules'),
  'ProductDetails'
);
const { Cart } = lazyImport(() => import('@/modules'), 'Cart');
const { OrderSuccess } = lazyImport(() => import('@/modules'), 'OrderSuccess');

export const AppRouter: FC = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path={ERoute.HOME} element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path={ERoute.PRODUCT_DETAILS} element={<ProductDetails />} />
          <Route path={ERoute.CART} element={<Cart />} />
          <Route path={ERoute.ORDER_SUCCESS} element={<OrderSuccess />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
