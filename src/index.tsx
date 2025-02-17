import { AppRouter } from './AppRouter';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/global.style';
import { BrowserRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('root') as Element);

root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  </BrowserRouter>
);
