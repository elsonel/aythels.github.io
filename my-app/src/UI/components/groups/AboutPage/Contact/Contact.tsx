import React from 'react';
import styled, { useTheme } from 'styled-components';
import { Paragraph } from '../../../text/Paragraph/Paragraph';
import { LinkWithUnderline } from '../../../inputs/LinkWithUnderline';

export interface IContactProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Contact: React.FC<IContactProps> = ({
  ...props
}): React.ReactElement => {
  const { link } = useTheme();

  return (
    <Layout {...props}>
      <Title>/ LINKS /</Title>
      <LinkColumn>
        <Link linkProps={{ href: link.github }}>
          <TextBold>GitHub</TextBold>
        </Link>
        <Link linkProps={{ href: link.linkedin }}>
          <TextBold>LinkedIn</TextBold>
        </Link>
      </LinkColumn>
      <LinkColumn>
        <Text>Email</Text>
        <Link linkProps={{ href: link.email, isOpeningNewTab: false }}>
          <TextBold>elsonliangel@gmail.com</TextBold>
        </Link>
      </LinkColumn>
      <LinkColumn>
        <Text>Built with React.</Text>
        <Link linkProps={{ href: link.storybook }}>
          <TextBold>Storybook</TextBold>
        </Link>
      </LinkColumn>
    </Layout>
  );
};

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

const Title = styled(Paragraph).attrs(() => ({
  isWrapped: false,
}))`
  color: ${({ theme }) => theme.color.text};
  font-weight: ${({ theme }) => theme.font.mono.weight.medium};
  font-family: ${({ theme }) => theme.font.mono.family};
  font-size: ${({ theme }) => theme.font.mono.size.large};
`;
