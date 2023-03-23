import React from 'react';
import styled, { css } from 'styled-components';
import { GreaterThan } from '../../../utility/styles/ResponsiveCSS';

export interface IFrameLayoutStickyProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const FrameLayoutSticky: React.FC<IFrameLayoutStickyProps> = ({
  children,
  ...props
}): React.ReactElement => (
  <Wrapper {...props}>
    <Sticky>{children}</Sticky>
  </Wrapper>
);

const Padding = css`
  ${({ theme }) =>
    GreaterThan(
      0,
      `
        padding: ${theme.size.headerHeight}px 0px 0px 0px;
      `
    ) +
    GreaterThan(
      theme.breakpoint.header,
      `
        padding: 
          ${theme.size.headerHeight}px 
          ${theme.size.padding}px 
          ${theme.size.padding}px 
          ${theme.size.headerHeight}px;
      `
    )}
`;

const Wrapper = styled.div`
  overflow: hidden;
  box-sizing: border-box;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  height: 100dvh;
  min-height: ${({ theme }) => theme.size.frameMinHeight}px;
  ${Padding}
  pointer-events: none;
`;

const Sticky = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  pointer-events: none;

  > * {
    pointer-events: initial;
  }
`;
