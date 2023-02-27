import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Paragraph, IParagraphProps } from '../Paragraph/Paragraph';

export interface FadeInParagraphProps extends IParagraphProps {
  children?: React.ReactNode;
  color: string;
  middleColor?: string;
  delay?: number;
  offset?: number;
  isLoaded?: boolean;
}

export const FadeInParagraph: React.FC<FadeInParagraphProps> = ({
  children,
  color,
  middleColor,
  delay = 0,
  offset = 10,
  isLoaded = true,
  ...props
}): React.ReactElement => {
  return isLoaded ? (
    <Text
      $offset={offset}
      $color={color}
      $middleColor={middleColor}
      $delay={delay}
      {...props}
    >
      {children}
    </Text>
  ) : (
    <></>
  );
};

const AnimationFadeIn = (offset: number, color: string, middleColor?: string) =>
  keyframes`
    0% {
      transform: translateY(${offset}px);
      color: transparent;
    }
    50% { 
      ${middleColor ? `color: ${middleColor}` : ``};
    }
    100% { 
      transform: translateY(0px);
      color: ${color};
    }
  `;

const Text = styled(Paragraph)<{
  $color: string;
  $middleColor?: string;
  $delay: number;
  $offset: number;
}>`
  position: relative;
  animation-fill-mode: forwards;
  animation-delay: ${({ $delay }) => $delay}ms;
  animation-duration: ${({ theme }) => theme.speed.slow}ms;
  animation-name: ${({ $offset, $color, $middleColor }) =>
    AnimationFadeIn($offset, $color, $middleColor)};

  transform: ${({ $offset }) => `translateY(${$offset}px)`};
  color: transparent;
`;
