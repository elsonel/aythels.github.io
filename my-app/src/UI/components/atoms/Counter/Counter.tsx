import React from 'react';
import styled from 'styled-components';
import { Paragraph } from '../../text/Paragraph/Paragraph';

export interface CounterProps extends React.HTMLAttributes<HTMLDivElement> {
  numerator?: number;
  denominator?: number;
}

export const Counter: React.FC<CounterProps> = ({
  numerator = 0,
  denominator = 0,
  ...props
}): React.ReactElement => (
  <Wrapper {...props}>
    <Numerator>{numerator}</Numerator>
    <Denominator>/</Denominator>
    <Denominator>{denominator}</Denominator>
  </Wrapper>
);

const Wrapper = styled.div`
  overflow: hidden;
  display: flex;
  gap: 2px;
  align-items: center;
`;

const Denominator = styled(Paragraph).attrs(({ theme }) => ({
  font: theme.font.mono,
}))`
  color: ${({ theme }) => theme.color.textNeutral};
  font-weight: ${({ theme }) => theme.font.mono.weight.medium};
  font-size: ${({ theme }) => theme.font.default.size.small};
  overflow-wrap: normal;
`;

const Numerator = styled(Denominator)`
  margin-right: 2px;
  color: ${({ theme }) => theme.color.background};
`;
