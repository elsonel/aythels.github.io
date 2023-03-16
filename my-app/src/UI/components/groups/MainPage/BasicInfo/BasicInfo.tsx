import React from 'react';
import styled from 'styled-components';
import { Paragraph } from '../../../text/Paragraph/Paragraph';
import { LinkWithUnderline } from '../../../inputs/LinkWithUnderline/';

export interface IBasicInfoProps extends React.HTMLAttributes<HTMLDivElement> {}

export const BasicInfo: React.FC<IBasicInfoProps> = ({
  ...props
}): React.ReactElement => (
  <Wrapper {...props}>
    <Layout>
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
  </Wrapper>
);

const Wrapper = styled.div`
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
  padding: 40px;
`;

const Layout = styled.div`
  width: 100%;
  display: flex;
  gap: 60px;
`;

const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
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
