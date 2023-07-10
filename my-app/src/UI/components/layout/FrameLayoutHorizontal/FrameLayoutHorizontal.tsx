import React from 'react';
import styled from 'styled-components';
import { GreaterThan } from '../../../utilities/styles/ResponsiveCSS';

export interface IFrameLayoutHorizontalProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const FrameLayoutHorizontal: React.FC<IFrameLayoutHorizontalProps> = ({
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
    GreaterThan(0, `padding-left: 0px; padding-right: 0px;`) +
    GreaterThan(
      theme.breakpoint.header,
      `
        padding-left: ${theme.size.headerHeight}px;
        padding-right: ${theme.size.padding}px;
      `
    )}
`;

const Content = styled.div`
  position: relative;
  width: 100%;
`;
