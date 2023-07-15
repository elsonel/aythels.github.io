import React from 'react';
import styled, { useTheme } from 'styled-components';
import { Link } from '../../inputs/Link';
import { ThemeInterface } from '../../../utilities/themes/Theme';
import { ButtonReverseText } from '../../inputs/ButtonReverseText';
import { LinkFake } from '../../inputs/LinkFake';
import { Paragraph } from '../../text/Paragraph';
import { GreaterThan } from '../../../utilities/styles/ResponsiveCSS';

export interface ErrorPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  homeLink: string;
  onHomeClick: () => void;
  email: string;
}

export const ErrorPanel: React.FC<ErrorPanelProps> = ({
  homeLink,
  onHomeClick,
  email,
  ...props
}): React.ReactElement => {
  const theme = useTheme() as ThemeInterface;

  return (
    <Wrapper {...props}>
      <Title textAlign="center">404</Title>
      <Subtitle>/ PAGE NOT FOUND /</Subtitle>
      <Paragraph size="large" textAlign="center">
        Oops! You've probably stumbled upon a page or project that hasen't been
        implemented yet. Let's get you back on track.
      </Paragraph>
      <WrapperButtonRow>
        <LinkFake href={homeLink} onClick={onHomeClick}>
          <ButtonReverseText
            border={theme.color.text}
            borderHovered={theme.color.text}
            color={theme.color.text}
            colorHovered={theme.color.background}
            colorText={theme.color.background}
            colorTextHovered={theme.color.text}
            children="HOME"
          />
        </LinkFake>
        <Link isOpeningNewTab={false} href={`mailto:${email}`}>
          <ButtonReverseText
            border={theme.color.text}
            color={theme.color.background}
            colorText={theme.color.text}
            children="CONTACT"
          />
        </Link>
      </WrapperButtonRow>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Title = styled(Paragraph).attrs(({ theme }) => ({
  isWrapped: false,
  font: theme.font.title,
  size: 'h1',
}))`
  color: ${({ theme }) => theme.color.text};

  ${GreaterThan(0, `font-size: 4rem;`)}
  ${GreaterThan(1200, `font-size: 6rem;`)}
  ${GreaterThan(1600, `font-size: 8rem;`)}
`;

const Subtitle = styled(Paragraph).attrs(({ theme }) => ({
  isWrapped: false,
  font: theme.font.mono,
  size: 'h4',
}))`
  font-weight: ${({ theme }) => theme.font.mono.weight.medium};
  color: ${({ theme }) => theme.color.text};
`;

const WrapperButtonRow = styled.div`
  display: flex;
  gap: 20px;
`;
