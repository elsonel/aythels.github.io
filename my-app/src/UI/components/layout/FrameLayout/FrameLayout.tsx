import React from 'react';
import styled from 'styled-components';
import { GreaterThan } from '../../../utilities/styles/ResponsiveCSS';

export interface IFrameLayoutProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const FrameLayout: React.FC<IFrameLayoutProps> = ({
  children,
  ...props
}): React.ReactElement => (
  <Wrapper {...props}>
    <Padding>
      <Content>{children}</Content>
    </Padding>
  </Wrapper>
);

const Wrapper = styled.div`
  overflow: hidden;
  width: 100%;
`;

const Padding = styled.div`
  box-sizing: border-box;
  width: 100vw;

  ${({ theme }) =>
    GreaterThan(
      0,
      `
      padding-top: ${theme.size.headerHeight}px;
      padding-bottom: 0px;
      padding-right: 0px;
      padding-left: 0px;
    `
    ) +
    GreaterThan(
      theme.breakpoint.header,
      `
      padding-top: ${theme.size.headerHeight}px;
      padding-bottom: ${theme.size.padding}px;
      padding-right: ${Math.max(0, theme.size.padding)}px;
      padding-left: ${theme.size.headerHeight}px;
    `
    )}

  // For child to fill the grid because min-height inheritance is buggy
  min-height: 100dvh;

  display: grid;
  grid-template-columns: 100%;
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
        margin-bottom: min(0px, calc(100dvh - ${h}px));
      `
      ) +
      GreaterThan(
        theme.breakpoint.header,
        `
        margin-bottom: min(0px, calc(100dvh - ${h + p}px));
      `
      )
    );
  }}
`;
