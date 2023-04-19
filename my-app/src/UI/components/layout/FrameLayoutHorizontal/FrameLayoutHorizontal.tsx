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
    <Content>{children}</Content>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
`;

const Content = styled.div`
  box-sizing: border-box;
  width: 100%;

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
