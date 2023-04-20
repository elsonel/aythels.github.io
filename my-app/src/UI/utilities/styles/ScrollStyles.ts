import { css } from 'styled-components';

export const ScrollStyle = css`
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.color.textNeutral};
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

export const HideScrollbar = `
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const HiddenTouchScrollX = css`
  overflow-x: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */

  ::-webkit-scrollbar {
    /* WebKit */
    width: 0;
  }
`;

export const HiddenTouchScrollY = css`
  overflow-y: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */

  ::-webkit-scrollbar {
    /* WebKit */
    height: 0;
  }
`;
