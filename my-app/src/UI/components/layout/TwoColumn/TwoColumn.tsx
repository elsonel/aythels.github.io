import React from 'react';
import styled from 'styled-components';
import { LessThanHook } from '../../../utility/hooks/ResponsiveProps';

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
  breakIfLessThan,
  ...props
}): React.ReactElement => {
  leftRatio = Math.max(0, leftRatio);
  rightRatio = Math.max(0, rightRatio);

  const shouldBreak =
    breakIfLessThan === undefined ? true : LessThanHook(breakIfLessThan);

  return (
    <Wrapper {...props}>
      <Content
        $ratio={leftRatio / (leftRatio + rightRatio)}
        $shouldBreak={shouldBreak}
      >
        {children[0] && children[0]}
      </Content>
      <Content
        $ratio={rightRatio / (leftRatio + rightRatio)}
        $shouldBreak={shouldBreak}
      >
        {children[1] && children[1]}
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
`;

const Content = styled.div<{ $ratio: number; $shouldBreak: boolean }>`
  width: ${({ $shouldBreak }) => ($shouldBreak ? `100%` : `0px`)};
  flex-grow: ${({ $ratio }) => $ratio};
`;
