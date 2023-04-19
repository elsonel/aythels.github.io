import React from 'react';
import styled from 'styled-components';
import { GreaterThan } from '../../../../utilities/styles/ResponsiveCSS';
import { BodyCenter } from '../../../layout/BodyCenter/BodyCenter';
import { Paragraph } from '../../../text/Paragraph/Paragraph';

export type FactData = { label: string; value: string };

export interface FactsListProps extends React.HTMLAttributes<HTMLDivElement> {
  facts: FactData[];
}

export const FactsList: React.FC<FactsListProps> = ({
  facts,
  ...props
}): React.ReactElement => (
  <BodyCenter {...props}>
    <Layout>
      {facts.map((fact) => (
        <FactWrapper key={fact.label}>
          <FactLabel isWrapped={false}>{fact.label.toUpperCase()}</FactLabel>
          <FactValue>{fact.value}</FactValue>
        </FactWrapper>
      ))}
    </Layout>
  </BodyCenter>
);

const Layout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  ${GreaterThan(0, `padding: 30px 0px;`)}
  ${GreaterThan(800, `padding: 80px 0px;`)}
`;

const FactColumn = `
  flex-direction: column;
  gap: 2px;
`;

const FactRow = `
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const FactWrapper = styled.div`
  display: flex;

  ${GreaterThan(0, FactColumn)}
  ${GreaterThan(500, FactRow)}
`;

const FactLabel = styled(Paragraph)`
  width: 100%;
  color: ${({ theme }) => theme.color.text};
  font-weight: ${({ theme }) => theme.font.default.weight.medium};
  font-family: ${({ theme }) => theme.font.mono.family};
  ${({ theme }) =>
    GreaterThan(0, `font-size: ${theme.font.default.size.default};`) +
    GreaterThan(800, `font-size: ${theme.font.default.size.large};`)};
`;

const FactValue = styled(Paragraph)`
  width: 100%;
  color: ${({ theme }) => theme.color.text};
  ${({ theme }) =>
    GreaterThan(0, `font-size: ${theme.font.default.size.default};`) +
    GreaterThan(800, `font-size: ${theme.font.default.size.large};`)};
`;
