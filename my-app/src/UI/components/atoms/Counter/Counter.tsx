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
  display: flex;
  gap: 4px;
  align-items: center;
`;

const Numerator = styled(Paragraph)`
  font-family: ${({ theme }) => theme.font.title.family};
  color: ${({ theme }) => theme.color.background};
  font-size: ${({ theme }) => theme.font.default.size.h5};
`;

const Denominator = styled(Paragraph)`
  font-family: ${({ theme }) => theme.font.title.family};
  color: ${({ theme }) => theme.color.textNeutral};
`;
