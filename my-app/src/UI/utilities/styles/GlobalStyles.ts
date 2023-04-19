import { createGlobalStyle } from 'styled-components';
import { HideScrollbar } from './ScrollStyles';

export const GlobalScrollLock = createGlobalStyle`
  html, body {
    overflow: hidden;
  } 
`;

export const GlobalScrollHide = createGlobalStyle`
  ${HideScrollbar}
`;

export const GlobalBackground = createGlobalStyle`
  html, body {
    background-color: ${({ theme }) => theme.color.background};
  }
`;
