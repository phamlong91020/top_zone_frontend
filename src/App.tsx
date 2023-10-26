import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loading from '@components/common/Loading';

const MainLayout = lazy(() => import('./components/common/Layout/MainLayout'));
const Home = lazy(() => import('./components/pages/Home'));
const Login = lazy(() => import('./components/pages/Login'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>

        <Route path="login" element={<Login />} />
      </Routes>
    </Suspense>
  );
}

export default App;
