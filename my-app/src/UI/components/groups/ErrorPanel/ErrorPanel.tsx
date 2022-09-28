import React from 'react';
import styled, { useTheme } from 'styled-components';
import { ThemeInterface } from '../../../utility/themes/Theme';
import { PageTitle } from '../../atoms/PageTitle';
import { ButtonReverseText } from '../../inputs/ButtonReverseText';
import { LinkFake } from '../../inputs/LinkFake';
import { Paragraph } from '../../text/Paragraph';

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
      <Title
        breakpoints={[
          {
            minWidth: 0,
            size: 'large',
          },
        ]}
        title="404"
        subtitle="PAGE NOT FOUND"
        textAlign="center"
      />
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

const Title = styled(PageTitle)`
  padding-bottom: 0px;
  margin-bottom: -8px;
`;

const WrapperButtonRow = styled.div`
  display: flex;
  gap: 20px;
`;
