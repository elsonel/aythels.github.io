import React from 'react';
import styled, { useTheme } from 'styled-components';
import { FadeInParagraph } from '../../../text/FadeInParagraph/FadeInParagraph';

export interface BackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  isLoaded?: boolean;
}

export const Background: React.FC<BackgroundProps> = ({
  isLoaded = true,
  ...props
}): React.ReactElement => {
  const { color } = useTheme();
  const sharedTextProps = {
    backgroundColor: color.backgroundOpposite,
    middleColor: color.primary,
    color: color.background,
    delay: 200,
    isLoaded: isLoaded,
  };

  return (
    <Wrapper {...props}>
      <Footer>
        <Name {...sharedTextProps}>ELSON LIANG</Name>
        <Copyright {...sharedTextProps}>ALL RIGHTS RESERVED © 2023</Copyright>
      </Footer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  height: 100dvh;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.color.backgroundOpposite};
`;

const Footer = styled.div`
  box-sizing: border-box;
  position: sticky;
  bottom: 0px;
  left: 0px;
  width: 100%;
  padding: 20px;
  padding-top: 100px;
`;

const Name = styled(FadeInParagraph)`
  text-align: center;
  font-size: ${({ theme }) => theme.font.default.size.small};
  font-weight: ${({ theme }) => theme.font.default.weight.bold};
  letter-spacing: ${({ theme }) => theme.font.default.letterSpacing.button};
  margin-bottom: 10px;
`;

const Copyright = styled(FadeInParagraph)`
  text-align: center;
  font-size: ${({ theme }) => theme.font.default.size.small};
  letter-spacing: ${({ theme }) => theme.font.default.letterSpacing.button};
`;
