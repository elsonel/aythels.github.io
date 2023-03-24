import React from 'react';
import styled from 'styled-components';
import { Paragraph } from '../../../text/Paragraph/Paragraph';

export interface IAwardsProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Awards: React.FC<IAwardsProps> = ({
  ...props
}): React.ReactElement => (
  <Layout {...props}>
    <Title>/ AWARDS /</Title>
    <LinkColumn>
      <Text>College + Netflix Creative Jam</Text>
      <TextBold>2nd Place - 985 Teams</TextBold>
    </LinkColumn>
    <LinkColumn>
      <Text>College + Amazon Creative Jam</Text>
      <TextBold>Top 15 - 419 Teams</TextBold>
    </LinkColumn>
  </Layout>
);

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Text = styled(Paragraph).attrs(() => ({
  isWrapped: false,
}))`
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.font.default.size.small};
`;

const TextBold = styled(Text)`
  font-weight: ${({ theme }) => theme.font.default.weight.bold};
`;

const Title = styled(Paragraph).attrs(() => ({
  isWrapped: false,
}))`
  color: ${({ theme }) => theme.color.text};
  font-weight: ${({ theme }) => theme.font.mono.weight.medium};
  font-family: ${({ theme }) => theme.font.mono.family};
  font-size: ${({ theme }) => theme.font.mono.size.large};
`;
