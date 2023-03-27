import React from 'react';
import styled, { css } from 'styled-components';
import { GreaterThan } from '../../../utility/styles/ResponsiveCSS';

export interface IFrameLayoutProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const FrameLayout: React.FC<IFrameLayoutProps> = ({
  children,

  ...props
}): React.ReactElement => (
  <Wrapper {...props}>
    <Content>{children}</Content>
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

  // For child to fill the grid because min-height inheritance is buggy
  min-height: 100vh;
  min-height: 100dvh;

  display: grid;
`;

const Content = styled.div`
  position: relative;
  width: 100%;

  ${({ theme }) => {
    const h = theme.size.frameMinHeight;
    const p = theme.size.padding;

    return (
      GreaterThan(
        0,
        `
        margin-bottom: min(0px, calc(100vh - ${h + p}px));
        margin-bottom: min(0px, calc(100dvh - ${h + p}px));
      `
      ) +
      GreaterThan(
        theme.breakpoint.header,
        `
        margin-bottom: min(0px, calc(100vh - ${h}px));
        margin-bottom: min(0px, calc(100dvh - ${h}px));
      `
      )
    );
  }}
`;
