import React from 'react';
import styled from 'styled-components';
import { Paragraph } from '../../../text/Paragraph/Paragraph';
import { LinkWithUnderline } from '../../../inputs/LinkWithUnderline';
import { GreaterThan } from '../../../../utility/styles/ResponsiveCSS';

export interface IContactInfoProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const ContactInfo: React.FC<IContactInfoProps> = ({
  ...props
}): React.ReactElement => (
  <Layout {...props}>
    <Title>Links</Title>
    <LinkColumn>
      <Link linkProps={{ href: '/' }}>
        <TextBold>GitHub</TextBold>
      </Link>
      <Link linkProps={{ href: '/' }}>
        <TextBold>LinkedIn</TextBold>
      </Link>
    </LinkColumn>
    <LinkColumn>
      <Text>Email</Text>
      <Link linkProps={{ href: '/' }}>
        <TextBold>elsonliangel@gmail.com</TextBold>
      </Link>
    </LinkColumn>
    <LinkColumn>
      <Text>Built with React.</Text>
      <Link linkProps={{ href: '/' }}>
        <TextBold>Storybook</TextBold>
      </Link>
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

const Link = styled(LinkWithUnderline).attrs(({ theme }) => ({
  color: theme.color.text,
}))``;

const Title = styled(TextBold)`
  font-size: ${({ theme }) => theme.font.default.size.large};
`;
