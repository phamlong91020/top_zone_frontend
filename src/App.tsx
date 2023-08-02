import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loading from 'src/components/common/Loading';

const MainLayout = lazy(() => import('./components/common/Layout/MainLayout'));
const Home = lazy(() => import('./components/pages/Home'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
