import store, { persistor } from './redux/store';
import { AppRouter } from './AppRouter';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { AppErrorBoundary } from './components';
import { Suspense } from 'react';

import ReactDOM from 'react-dom/client';

import '@/assets/css/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <AppErrorBoundary>
          <Suspense fallback={null}>
            <AppRouter />
          </Suspense>
        </AppErrorBoundary>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
