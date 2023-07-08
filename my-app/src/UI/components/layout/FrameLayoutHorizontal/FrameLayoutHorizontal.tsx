import React from 'react';
import styled from 'styled-components';
import { GreaterThan } from '../../../utilities/styles/ResponsiveCSS';
import useScrollbarWidthBody from '../../../utilities/hooks/useScrollbarWidthBody';

export interface IFrameLayoutHorizontalProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const FrameLayoutHorizontal: React.FC<IFrameLayoutHorizontalProps> = ({
  children,

  ...props
}): React.ReactElement => {
  const scrollbarWidth = useScrollbarWidthBody();

  return (
    <Wrapper $scrollbarWidth={scrollbarWidth} {...props}>
      <Content>{children}</Content>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ $scrollbarWidth: number }>`
  box-sizing: border-box;
  width: 100%;

  ${({ theme, $scrollbarWidth }) =>
    GreaterThan(0, `padding-left: 0px; padding-right: 0px;`) +
    GreaterThan(
      theme.breakpoint.header,
      `
        padding-left: ${theme.size.headerHeight}px;
        padding-right: ${Math.max(0, theme.size.padding - $scrollbarWidth)}px 
      `
    )}
`;

const Content = styled.div`
  width: 100%;
`;
