import React from 'react';
import styled, { useTheme } from 'styled-components';
import { GreaterThan, LessThan } from '../../../utilities/styles/ResponsiveCSS';
import { LinkWithUnderline } from '../../inputs/LinkWithUnderline/LinkWithUnderline';
import { BodyWide } from '../../layout/BodyWide/BodyWide';
import { FadeInParagraph } from '../../text/FadeInParagraph/FadeInParagraph';
import { Paragraph } from '../../text/Paragraph/Paragraph';
import { Background } from './Background/Background';

export interface FooterSectionProps
  extends React.HTMLAttributes<HTMLDivElement> {
  isLoaded?: boolean;
}

export const FooterSection: React.FC<FooterSectionProps> = ({
  isLoaded = true,
  ...props
}): React.ReactElement => {
  const { color } = useTheme();
  const sharedTextProps = {
    backgroundColor: color.backgroundOpposite,
    middleColor: color.primary,
    color: color.background,
    isLoaded: isLoaded,
    isWrapped: false,
  };

  return (
    <>
      <Wrapper {...props}>
        <BodyWide>
          <SubTitle {...sharedTextProps}>That's all for now...</SubTitle>
          <Title {...sharedTextProps}>LET'S CONNECT</Title>
        </BodyWide>
        <BodyWide>
          <Layout>
            <LinkColumn>
              <LinkLabel>MEDIA</LinkLabel>
              <LinkWithUnderline
                linkProps={{ href: '/' }}
                color={color.background}
              >
                <LinkText>GitHub</LinkText>
              </LinkWithUnderline>

              <LinkWithUnderline
                linkProps={{ href: '/' }}
                color={color.background}
              >
                <LinkText>LinkedIn</LinkText>
              </LinkWithUnderline>
            </LinkColumn>
            <LinkColumn>
              <LinkLabel>EMAIL</LinkLabel>
              <LinkWithUnderline
                linkProps={{ href: '/' }}
                color={color.background}
              >
                <LinkText>elsonliangel@gmail.com</LinkText>
              </LinkWithUnderline>
            </LinkColumn>
          </Layout>
        </BodyWide>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
  ${GreaterThan(0, `padding: 30px 0px;`)}
  ${GreaterThan(700, `padding: 40px 0px;`)}
  background-color: ${({ theme }) => theme.color.backgroundOpposite};
`;

const SubTitle = styled(Paragraph)`
  ${({ theme }) =>
    GreaterThan(0, `font-size: ${theme.font.default.size.large};`) +
    GreaterThan(600, `font-size: ${theme.font.default.size.h4};`)}
  margin-bottom: 8px;
`;

const Title = styled(Paragraph)`
  ${GreaterThan(0, `font-size: 2rem;`)}
  ${GreaterThan(450, `font-size: 3rem;`)}
  ${GreaterThan(600, `font-size: 4rem;`)}
  ${GreaterThan(1000, `font-size: 7rem;`)}
  ${GreaterThan(1400, `font-size: 9rem;`)}

  font-family: ${({ theme }) => theme.font.title.family};
  line-height: 1;
  margin-bottom: 40px;
`;

const Layout = styled.div`
  width: 100%;
  display: flex;
  gap: 200px;
`;

const LinkLabel = styled(Paragraph)`
  letter-spacing: ${({ theme }) => theme.font.default.letterSpacing.button};
  color: ${({ theme }) => theme.color.background};
  font-weight: ${({ theme }) => theme.font.default.weight.bold};
  ${({ theme }) =>
    GreaterThan(0, `font-size: ${theme.font.default.size.default};`) +
    GreaterThan(600, `font-size: ${theme.font.default.size.large};`)};
`;

const LinkText = styled(Paragraph)`
  overflow-wrap: normal;
  color: ${({ theme }) => theme.color.background};
  font-weight: ${({ theme }) => theme.font.default.weight.medium};
  ${({ theme }) =>
    GreaterThan(0, `font-size: ${theme.font.default.size.default};`) +
    GreaterThan(600, `font-size: ${theme.font.default.size.large};`)}
`;

const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
