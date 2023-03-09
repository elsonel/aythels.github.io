import React from 'react';
import styled from 'styled-components';
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
  width: min(600px, 100%);
  padding: 0px 20px;
  margin: auto;
`;
