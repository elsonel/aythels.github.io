import React from 'react';
import styled from 'styled-components';
import { GreaterThan } from '../../../utility/styles/ResponsiveCSS';
import { BodyCenter } from '../BodyCenter';
export interface IBodyWideProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const BodyWide: React.FC<IBodyWideProps> = ({
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
  width: min(1900px, 100%);

  ${GreaterThan(0, `padding: 0px max(3.5%, 20px)`)}
  ${GreaterThan(700, `padding: 0px max(6%, 20px);`)}

  margin: auto;
`;
