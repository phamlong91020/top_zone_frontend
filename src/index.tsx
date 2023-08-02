import { createRoot } from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/global.style';
import './styles/index.css';

const root = createRoot(document.getElementById('root') as Element);

root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
