import React from 'react';
import styled, { useTheme } from 'styled-components';
import { ThemeInterface } from '../../../utility/themes/Theme';
import { FooterIconRow } from '../../groups/Footer/FooterIconRow';
import { Paragraph } from '../../text/Paragraph';
import { TextLink } from '../../text/TextLink';
import { TextTitle } from '../../text/TextTitle';

export interface WelcomeProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Welcome: React.FC<WelcomeProps> = ({
  ...props
}): React.ReactElement => {
  const theme = useTheme() as ThemeInterface;

  return (
    <Wrapper {...props}>
      <TextTitle size="small">
        Welcome to Elson's Front-End Development Library!
      </TextTitle>
      <br />
      <Paragraph>
        Every React front-end component used to create my portfolio is contained
        in this library.
      </Paragraph>
      <br />
      <Paragraph>
        This is a completely independent project. Each component was hand-coded
        from scratch and tested against edge cases and responsiveness. Some
        components may lack proper documentation.
      </Paragraph>
      <br />
      <Paragraph>Feel free to browse around.</Paragraph>
      <br />
      <a href={theme.link.home}>
        <TextLink>Return to main site.</TextLink>
      </a>
      <br />
      <FooterIconRow />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px;
`;