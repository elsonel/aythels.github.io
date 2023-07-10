import React from 'react';
import styled, { css } from 'styled-components';
import { GreaterThan } from '../../../utilities/styles/ResponsiveCSS';

export interface IFrameLayoutStickyProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const FrameLayoutSticky: React.FC<IFrameLayoutStickyProps> = ({
  children,
  ...props
}): React.ReactElement => (
  <Wrapper {...props}>
    <Padding>
      <Sticky>{children}</Sticky>
    </Padding>
  </Wrapper>
);

const Wrapper = styled.div`
  overflow: hidden;
  position: fixed;

  width: 100%;
  top: 0px;
  left: 0px;

  pointer-events: none;
`;

const Padding = styled.div`
  box-sizing: border-box;
  width: 100vw;

  ${({ theme }) =>
    GreaterThan(
      0,
      `
      height: max(100dvh, ${theme.size.frameMinHeight}px);
      padding-top: ${theme.size.headerHeight}px;
      padding-bottom: 0px;
      padding-right: 0px;
      padding-left: 0px;
    `
    ) +
    GreaterThan(
      theme.breakpoint.header,
      `
      height: max(100dvh, ${theme.size.frameMinHeight + theme.size.padding}px);
      padding-top: ${theme.size.headerHeight}px;
      padding-bottom: ${theme.size.padding}px;
      padding-right: ${theme.size.padding}px;
      padding-left: ${theme.size.headerHeight}px;
    `
    )}
`;

const Sticky = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  > * {
    pointer-events: initial;
  }
`;
