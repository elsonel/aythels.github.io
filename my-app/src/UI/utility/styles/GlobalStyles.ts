import { createGlobalStyle } from 'styled-components';

export const GlobalScrollLock = createGlobalStyle`
  html, body {
    overflow: hidden;
  } 
`;

export const GlobalBackground = createGlobalStyle`
  html, body {
    background-color: ${({ theme }) => theme.color.background};
  }
`;
