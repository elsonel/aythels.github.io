import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { Theme } from './UI/utilities/themes/Theme';
import './index.css';
import { App } from './App';
import { GlobalStyle } from './UI/utilities/styles/GlobalStyles';

const root = createRoot(document.getElementById('root')!);
root.render(
  <StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </StrictMode>
);
