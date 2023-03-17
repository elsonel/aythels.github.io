import React from 'react';
import styled from 'styled-components';
import { Paragraph } from '../../../text/Paragraph/Paragraph';
import { LinkWithUnderline } from '../../../inputs/LinkWithUnderline';
import { GreaterThan } from '../../../../utility/styles/ResponsiveCSS';

export interface IAwardsProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Awards: React.FC<IAwardsProps> = ({
  ...props
}): React.ReactElement => (
  <Layout {...props}>
    <LinkColumn>
      <Text>College + Netflix Creative Jam</Text>
      <TextBold>2nd Place</TextBold>
    </LinkColumn>
    <LinkColumn>
      <Text>College + Amazon Creative Jam</Text>
      <TextBold>Honoree</TextBold>
    </LinkColumn>
  </Layout>
);

const Layout = styled.div`
  overflow: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
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
