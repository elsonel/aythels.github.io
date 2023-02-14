import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Paragraph, IParagraphProps } from '../Paragraph/Paragraph';

export interface FadeInParagraphProps extends IParagraphProps {
  children?: React.ReactNode;
  backgroundColor: string;
  middleColor: string;
  color: string;
  delay?: number;
  isLoaded?: boolean;
}

export const FadeInParagraph: React.FC<FadeInParagraphProps> = ({
  children,
  backgroundColor,
  middleColor,
  color,
  delay = 0,
  isLoaded = false,
  ...props
}): React.ReactElement => {
  return isLoaded ? (
    <Text
      $color1={backgroundColor}
      $color2={middleColor}
      $color3={color}
      $delay={delay}
      {...props}
    >
      {children}
    </Text>
  ) : (
    <></>
  );
};

const AnimationFadeIn = (color1: string, color2: string, color3: string) =>
  keyframes`
    0% {
      transform: translateY(6px);
      color: ${color1};
      opacity: 0;
    }
    50% { 
      transform: translateY(3px);
      color: ${color2};
      opacity: 0.5;
    }
    100% { 
      transform: translateY(0px);
      color: ${color3};
      opacity: 1;
    }
  `;

const Text = styled(Paragraph)<{
  $color1: string;
  $color2: string;
  $color3: string;
  $delay: number;
}>`
  position: relative;
  animation-fill-mode: forwards;
  animation-timing-function: linear;
  animation-delay: ${({ $delay }) => $delay}ms;
  animation-duration: ${({ theme }) => theme.speed.slow}ms;
  animation-name: ${({ $color1, $color2, $color3 }) =>
    AnimationFadeIn($color1, $color2, $color3)};

  transform: translateY(6px);
  color: ${({ $color1 }) => $color1};
  opacity: 0;
`;
