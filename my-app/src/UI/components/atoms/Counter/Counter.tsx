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
  gap: 4px;
  align-items: center;
`;

const Numerator = styled(Paragraph)`
  margin-right: 2px;
  padding-bottom: 1px;
  font-weight: ${({ theme }) => theme.font.default.weight.bold};
  color: ${({ theme }) => theme.color.background};
  font-size: ${({ theme }) => theme.font.default.size.large};
  overflow-wrap: normal;
`;

const Denominator = styled(Paragraph)`
  font-size: ${({ theme }) => theme.font.default.size.small};
  font-weight: ${({ theme }) => theme.font.default.weight.medium};
  color: ${({ theme }) => theme.color.textNeutral};
  overflow-wrap: normal;
`;
