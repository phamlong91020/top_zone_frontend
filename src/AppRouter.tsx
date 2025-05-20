import { FC, Suspense, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppLayout } from '@/components';
import { lazyImport } from './utils';
import { ERoute } from './enums';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { queryClientDefaultOptions } from '@/constants';

const { Home } = lazyImport(() => import('@/modules'), 'Home');
const { ProductDetails } = lazyImport(
  () => import('@/modules'),
  'ProductDetails'
);
const { Cart } = lazyImport(() => import('@/modules'), 'Cart');
const { OrderSuccess } = lazyImport(() => import('@/modules'), 'OrderSuccess');

export const AppRouter: FC = () => {
  const [queryClient] = useState(
    () => new QueryClient(queryClientDefaultOptions)
  );

  return (
    <QueryClientProvider client={queryClient}>
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
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
