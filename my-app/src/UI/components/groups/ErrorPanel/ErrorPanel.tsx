import React from 'react';
import styled, { useTheme } from 'styled-components';
import { ThemeInterface } from '../../../utility/themes/Theme';
import { ButtonReverseText } from '../../inputs/ButtonReverseText';
import { LinkFake } from '../../inputs/LinkFake';
import { Paragraph } from '../../text/Paragraph';
import { TextTitle } from '../../text/TextTitle';

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
      <TitleWrapper>
        <TextTitle size="large" textAlign="center">
          404
        </TextTitle>
        <Paragraph size="h4" textAlign="center" weight="bold2">
          PAGE NOT FOUND
        </Paragraph>
      </TitleWrapper>
      <Paragraph size="large" textAlign="center">
        Oops! You've probably stumbled upon a page or project that I haven't
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
        <LinkFake isDefaultPrevented={false} href={`mailto:${email}`}>
          <ButtonReverseText
            border={theme.color.text}
            color={theme.color.background}
            colorText={theme.color.text}
            children="CONTACT"
          />
        </LinkFake>
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

const TitleWrapper = styled.div`
  margin-bottom: -10px;
`;

const WrapperButtonRow = styled.div`
  display: flex;
  gap: 20px;
`;
