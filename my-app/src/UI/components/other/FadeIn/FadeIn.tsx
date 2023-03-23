import React, { useLayoutEffect, useRef, useState } from 'react';
import styled, { Keyframes, keyframes, useTheme } from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const getAnimation = (offset: number | string) => {
  return keyframes`
    0% {
      transform: translateY(${
        typeof offset === 'number' ? offset + 'px' : offset
      });
      // ${uuidv4()}
    }
    100% { 
      transform: translateY(0px);
    }
  `;
};

export interface FadeInProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  delay?: number;
  duration?: number;
  offset?: number | string;
  isLoaded?: boolean;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration,
  offset = 10,
  isLoaded = true,
  ...props
}): React.ReactElement => {
  const { speed } = useTheme();
  const ref = useRef<HTMLDivElement>(null);
  const [animation, setAnimation] = useState(getAnimation(offset));

  useLayoutEffect(() => {
    if (ref.current) ref.current.style.pointerEvents = 'none';
    if (isLoaded) setAnimation(getAnimation(offset));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded]);

  return (
    <Wrapper {...props}>
      <Content
        ref={ref}
        $animation={animation}
        $duration={duration ?? speed.slow}
        $delay={isLoaded ? delay : 0}
        $isVisible={isLoaded}
        onAnimationEnd={() => {
          if (ref.current) {
            ref.current.style.pointerEvents = 'auto';
          }
        }}
      >
        {children}
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const Content = styled.div<{
  $delay: number;
  $duration: number;
  $animation: Keyframes;
  $isVisible: boolean;
}>`
  width: 100%;

  animation-delay: ${({ $delay }) => $delay}ms;
  animation-duration: ${({ $duration }) => $duration}ms;
  animation-name: ${({ $animation }) => $animation};
  animation-fill-mode: forwards;

  transition: ${({ theme }) => theme.speed.slow}ms;
  transition-delay: ${({ $delay }) => $delay}ms;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
`;
