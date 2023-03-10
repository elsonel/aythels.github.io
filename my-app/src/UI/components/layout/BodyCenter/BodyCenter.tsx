import React from 'react';
import styled from 'styled-components';

const CENTER_WIDTH = 600; // includes horizontal padding
const HORIZONTAL_PADDING = 20;

export interface IBodyCenterProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const BodyCenter: React.FC<IBodyCenterProps> = ({
  children,
  ...props
}): React.ReactElement => {
  return (
    <Wrapper {...props}>
      <Content>{children}</Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const Content = styled.div`
  box-sizing: border-box;
  width: min(${CENTER_WIDTH}px, 100%);
  padding: 0px ${HORIZONTAL_PADDING}px;
  margin: auto;
`;
