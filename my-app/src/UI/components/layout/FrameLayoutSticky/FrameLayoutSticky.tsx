import React from 'react';
import styled, { css } from 'styled-components';
import { GreaterThan } from '../../../utilities/styles/ResponsiveCSS';
import useScrollbarWidthBody from '../../../utilities/hooks/useScrollbarWidthBody';

export interface IFrameLayoutStickyProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const FrameLayoutSticky: React.FC<IFrameLayoutStickyProps> = ({
  children,
  ...props
}): React.ReactElement => {
  const scrollbarWidth = useScrollbarWidthBody();

  return (
    <Wrapper $scrollbarWidth={scrollbarWidth} {...props}>
      <Sticky>{children}</Sticky>
    </Wrapper>
  );
};

const Padding = css<{ $scrollbarWidth: number }>`
  ${({ theme, $scrollbarWidth }) =>
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
        height: max(100dvh, ${
          theme.size.frameMinHeight + theme.size.padding
        }px);
        padding-top: ${theme.size.headerHeight}px;
        padding-bottom: ${theme.size.padding}px;
        padding-right: ${Math.max(0, theme.size.padding - $scrollbarWidth)}px;
        padding-left: ${theme.size.headerHeight}px;
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
  ${Padding}

  pointer-events: none;
`;

const Sticky = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  > * {
    pointer-events: initial;
  }
`;
