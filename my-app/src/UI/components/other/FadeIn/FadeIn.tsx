import React from 'react';
import styled, { keyframes } from 'styled-components';

export interface FadeInProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  delay?: number;
  offset?: number;
  isLoaded?: boolean;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  offset = 10,
  isLoaded = true,
  ...props
}): React.ReactElement => {
  return isLoaded ? (
    <Wrapper $offset={offset} $delay={delay} {...props}>
      {children}
    </Wrapper>
  ) : (
    <></>
  );
};

const AnimationFadeIn = (offset: number) =>
  keyframes`
    0% {
      transform: translateY(${offset}px);
      opacity: 0;
    }
    100% { 
      transform: translateY(0px);
      opacity: 1;
    }
  `;

const Wrapper = styled.div<{
  $delay: number;
  $offset: number;
}>`
  position: relative;
  animation-fill-mode: forwards;
  animation-delay: ${({ $delay }) => $delay}ms;
  animation-duration: ${({ theme }) => theme.speed.slow}ms;
  animation-name: ${({ $offset }) => AnimationFadeIn($offset)};

  transform: ${({ $offset }) => `translateY(${$offset}px)`};
  opacity: 0;
`;