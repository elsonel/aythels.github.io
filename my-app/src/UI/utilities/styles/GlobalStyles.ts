import { createGlobalStyle } from 'styled-components';
import { HideScrollbar, ScrollStyle } from './ScrollStyles';

export const GlobalScrollHidden = createGlobalStyle`
  body {
    ${HideScrollbar}
  }
`;

export const GlobalScrollLock = createGlobalStyle`
  html {
    overflow: hidden;
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${ScrollStyle}

  html, body {
    background-color: ${({ theme }) => theme.color.background};
  }
`;
