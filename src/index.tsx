import { AppRouter } from './AppRouter';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '@/assets/css/index.css';

const root = createRoot(document.getElementById('root') as Element);

root.render(
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
);
