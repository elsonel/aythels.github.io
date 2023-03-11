import React from 'react';
import styled from 'styled-components';
import { GreaterThan } from '../../../../utility/styles/ResponsiveCSS';
import { BodyWide } from '../../../layout/BodyWide/BodyWide';
import { Paragraph } from '../../../text/Paragraph/Paragraph';

export interface FactsListProps extends React.HTMLAttributes<HTMLDivElement> {
  facts: { label: string; value: string }[];
}

export const FactsList: React.FC<FactsListProps> = ({
  facts,
  ...props
}): React.ReactElement => (
  <BodyWide snapWidth={1400} {...props}>
    <Layout>
      {facts.map((fact) => (
        <FactWrapper key={fact.label}>
          <FactTitle isWrapped={false}>{fact.label}</FactTitle>
          <FactValue isWrapped={false}>{fact.value}</FactValue>
        </FactWrapper>
      ))}
    </Layout>
  </BodyWide>
);

const FactColumn = `
  flex-direction: column;
`;

const FactRow = `
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const LayoutColumn = `
  flex-direction: column;
  gap: 20px;
`;

const LayoutRow = `
  flex-direction: row;
  gap: 40px;
  justify-content: space-between;
`;

const Layout = styled.div`
  width: 100%;
  display: flex;
  ${GreaterThan(0, LayoutColumn)}
  ${GreaterThan(1400, LayoutRow)}
`;

const FactWrapper = styled.div`
  display: flex;

  ${GreaterThan(0, FactColumn)}
  ${GreaterThan(450, FactRow)}
  ${GreaterThan(1400, FactColumn)}
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
    GreaterThan(0, `font-size: ${theme.font.default.size.small};`) +
    GreaterThan(600, `font-size: ${theme.font.default.size.default};`)};
`;
