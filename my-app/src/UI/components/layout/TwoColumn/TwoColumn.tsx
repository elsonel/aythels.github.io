import React from 'react';
import styled from 'styled-components';
import { LessThan } from '../../../utility/styles/ResponsiveCSS';

export interface TwoColumnProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: [React.ReactNode, React.ReactNode];
  leftRatio?: number;
  rightRatio?: number;
  breakIfLessThan?: number;
}

export const TwoColumn: React.FC<TwoColumnProps> = ({
  children = [],
  leftRatio = 0.5,
  rightRatio = 0.5,
  breakIfLessThan = 800,
  ...props
}): React.ReactElement => {
  leftRatio = Math.max(0, leftRatio);
  rightRatio = Math.max(0, rightRatio);

  return (
    <Wrapper $lessThan={breakIfLessThan} {...props}>
      <Left $ratio={rightRatio / (leftRatio + rightRatio)}>
        {children[0] && children[0]}
      </Left>
      <Right $ratio={leftRatio / (leftRatio + rightRatio)}>
        {children[1] && children[1]}
      </Right>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ $lessThan: number }>`
  width: 100%;

  display: flex;

  ${({ $lessThan }) => LessThan($lessThan, 'flex-wrap: wrap;')};
`;

const Left = styled.div<{ $ratio: number }>`
  flex-shrink: ${({ $ratio }) => $ratio};
  width: 100%;
`;

const Right = styled.div<{ $ratio: number }>`
  flex-shrink: ${({ $ratio }) => $ratio};
  width: 100%;
`;
