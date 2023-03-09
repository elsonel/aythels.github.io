import React from 'react';
import styled, { useTheme } from 'styled-components';
import { GreaterThan } from '../../../../utility/styles/ResponsiveCSS';
import { Paragraph } from '../../../text/Paragraph/Paragraph';

export interface FactsListProps extends React.HTMLAttributes<HTMLDivElement> {
  facts: { label: string; value: string }[];
}

export const FactsList: React.FC<FactsListProps> = ({
  facts,
  ...props
}): React.ReactElement => {
  return (
    <Wrapper {...props}>
      {facts.map((fact) => (
        <FactWrapper key={fact.label}>
          <FactTitle isWrapped={false}>{fact.label}</FactTitle>
          <FactValue isWrapped={false}>{fact.value}</FactValue>
        </FactWrapper>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow: hidden;
  width: 100%;
  display: flex;
  ${GreaterThan(0, `flex-direction: column; gap: 30px;`)}
  ${GreaterThan(
    1400,
    `flex-direction: row; gap: 40px; justify-content: space-between;`
  )}
`;

const FactWrapper = styled.div`
  display: flex;

  ${GreaterThan(0, `flex-direction: column;`)}
  ${GreaterThan(
    450,
    ` 
      flex-direction: row; 
      align-items: center; 
      justify-content: space-between;
    `
  )}
  ${GreaterThan(1400, `flex-direction: column;`)}
`;

const FactTitle = styled(Paragraph)`
  width: 100%;
  color: ${({ theme }) => theme.color.text};
  font-weight: ${({ theme }) => theme.font.default.weight.bold};
  letter-spacing: ${({ theme }) => theme.font.default.letterSpacing.button};
  ${({ theme }) =>
    GreaterThan(0, `font-size: ${theme.font.default.size.small};`) +
    GreaterThan(600, `font-size: ${theme.font.default.size.default};`)};
`;

const FactValue = styled(Paragraph)`
  width: 100%;
  color: ${({ theme }) => theme.color.text};
  ${({ theme }) =>
    GreaterThan(0, `font-size: ${theme.font.default.size.default};`) +
    GreaterThan(600, `font-size: ${theme.font.default.size.large};`)};
`;
