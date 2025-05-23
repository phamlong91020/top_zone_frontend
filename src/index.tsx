import ReactDOM from 'react-dom/client';
import store, { persistor } from './redux/store';
import { AppRouter } from './AppRouter';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { AppErrorBoundary } from './components';
import { Suspense } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import '@/assets/css/index.css';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <AppErrorBoundary>
          <Suspense fallback={null}>
            <AppRouter />
            <ToastContainer
              position="bottom-left"
              autoClose={2500}
              newestOnTop={false}
              closeOnClick={true}
              rtl={false}
            />
          </Suspense>
        </AppErrorBoundary>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
