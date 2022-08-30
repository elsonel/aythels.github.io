import { css } from 'styled-components';

export const ScrollStyle = css`
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.color['textPassive4']};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.color['textPassive2']};
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
