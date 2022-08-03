import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { Theme, ThemeInterface } from './UI/utility/Theme';
import './index.css';
import { createGlobalStyle } from 'styled-components';
import { App } from './App';
import { Loader } from './Loader';

const GlobalStyle = createGlobalStyle<{ theme: ThemeInterface }>`
  body {
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

// This has to be first to render first
const rootLoader = createRoot(document.getElementById('root-loader')!);
rootLoader.render(
  <StrictMode>
    <ThemeProvider theme={Theme}>
      <Loader />
    </ThemeProvider>
  </StrictMode>
);

const root = createRoot(document.getElementById('root')!);
root.render(
  <StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </StrictMode>
);
