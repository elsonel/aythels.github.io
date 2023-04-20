import { createGlobalStyle } from 'styled-components';
import { HideScrollbar, ScrollStyle } from './ScrollStyles';

export const GlobalScrollLock = createGlobalStyle`
  html, body {
    overflow: hidden;
  } 
`;

export const GlobalScrollHide = createGlobalStyle`
  html, body {
    ${HideScrollbar}
  }
`;

export const GlobalScrollOverlay = createGlobalStyle`
  html, body {
    overflow: overlay;
  }
`;

export const GlobalScrollStyle = createGlobalStyle`
  ${ScrollStyle}
`;

export const GlobalBackground = createGlobalStyle`
  html, body {
    background-color: ${({ theme }) => theme.color.background};
  }
`;
