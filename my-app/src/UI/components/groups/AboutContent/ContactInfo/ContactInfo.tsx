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
    <LinkColumn>
      <Link linkProps={{ href: '/' }}>
        <LinkText>GitHub</LinkText>
      </Link>
      <Link linkProps={{ href: '/' }}>
        <LinkText>LinkedIn</LinkText>
      </Link>
    </LinkColumn>
    <LinkColumn>
      <Text>Email</Text>
      <Link linkProps={{ href: '/' }}>
        <LinkText>elsonliangel@gmail.com</LinkText>
      </Link>
    </LinkColumn>
    <LinkColumn>
      <Text>Built with React.</Text>
      <Link linkProps={{ href: '/' }}>
        <LinkText>Storybook</LinkText>
      </Link>
    </LinkColumn>
  </Layout>
);

const Layout = styled.div`
  overflow: hidden;
  width: 100%;
  display: flex;

  ${GreaterThan(0, `flex-direction: column; gap: 20px;`)}
  ${GreaterThan(600, `flex-direction: row; gap: 60px;`)}
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

const LinkText = styled(Text)`
  font-weight: ${({ theme }) => theme.font.default.weight.bold};
`;

const Link = styled(LinkWithUnderline).attrs(({ theme }) => ({
  color: theme.color.text,
}))``;
