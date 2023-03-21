import React from 'react';
import styled, { css } from 'styled-components';
import { GreaterThan } from '../../../utility/styles/ResponsiveCSS';

export interface IFrameLayoutProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  stickyChild?: React.ReactNode;
}

export const FrameLayout: React.FC<IFrameLayoutProps> = ({
  children,
  stickyChild,
  ...props
}): React.ReactElement => (
  <Wrapper {...props}>
    <Content>{children}</Content>
    <Sticky>
      <StickyContent>{stickyChild}</StickyContent>
    </Sticky>
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
  width: 100%;
  ${Padding}
`;

const Content = styled.div`
  position: relative;
  width: 100%;
`;

const Sticky = styled.div`
  overflow: hidden;
  box-sizing: border-box;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  min-height: ${({ theme }) =>
    theme.size.headerHeight * 3 + theme.size.padding}px;
  ${Padding}

  pointer-events: none;
`;

const StickyContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  pointer-events: none;

  > * {
    pointer-events: auto;
  }
`;
