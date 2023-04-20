import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { Theme } from './UI/utilities/themes/Theme';
import './index.css';
import { App } from './App';
import { Loader } from './Loader';
import { GlobalBackground } from './UI/utilities/styles/GlobalStyles';

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
      <GlobalBackground />
      <App />
    </ThemeProvider>
  </StrictMode>
);
