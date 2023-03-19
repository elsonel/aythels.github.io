import React from 'react';
import styled from 'styled-components';
import { GreaterThan } from '../../../utility/styles/ResponsiveCSS';

export interface IFrameLayoutProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const FrameLayout: React.FC<IFrameLayoutProps> = ({
  children,
  ...props
}): React.ReactElement => {
  return (
    <Wrapper {...props}>
      <Content>{children}</Content>
    </Wrapper>
  );
};

const HEADER_WIDTH = 52;
const PADDING = 20;
const MOBILE_BREAKPOINT = 800;

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;

  ${GreaterThan(0, `padding: ${HEADER_WIDTH}px 0px 0px 0px;`)}
  ${GreaterThan(
    MOBILE_BREAKPOINT,
    `padding: ${HEADER_WIDTH}px ${PADDING}px ${PADDING}px ${HEADER_WIDTH}px;`
  )}
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  ${GreaterThan(0, `min-height: calc(100vh - ${HEADER_WIDTH}px);`)}
  ${GreaterThan(
    MOBILE_BREAKPOINT,
    `min-height: calc(100vh - ${PADDING}px - ${HEADER_WIDTH}px);`
  )}
`;
