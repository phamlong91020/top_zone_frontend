import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loading from '@components/common/Loading';

const Layout = lazy(() => import('./components/common/Layout'));
const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Signup'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
      </Routes>
    </Suspense>
  );
}

export default App;
