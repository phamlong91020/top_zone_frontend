import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { Layout, Loading } from '@/components';

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
