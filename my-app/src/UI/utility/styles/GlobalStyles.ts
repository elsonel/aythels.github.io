import { createGlobalStyle } from 'styled-components';
import { Theme } from '../themes/Theme';

export const GlobalScrollHidden = createGlobalStyle`
  html, body {
    overflow: hidden;
  } 
`;

export const GlobalBackground = createGlobalStyle`
  html, body {
    background-color: ${Theme.color.background};
  }
`;
