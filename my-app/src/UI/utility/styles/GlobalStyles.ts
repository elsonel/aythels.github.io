import { createGlobalStyle } from 'styled-components';
import { Theme } from '../themes/Theme';

export const GlobalScrollLock = createGlobalStyle`
  html, body {
    overflow: hidden;
    touch-action: none;
  } 
`;

export const GlobalBackground = createGlobalStyle`
  html, body {
    background-color: ${Theme.color.background};
  }
`;
