import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import useOnWindowScroll from '../../../utility/hooks/useOnWindowScroll';

const LOAD_DELAY = 100;
// This is needed because useEffect sometimes returns the wrong value from getBoundingClientReact.

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
  const [isInView, setIsInView] = useState(false);
  const delayRef = useRef(delay);
  const ref = useRef<HTMLDivElement>(null);

  const onScroll = () => {
    if (!ref.current) return;
    const { height, bottom } = ref.current.getBoundingClientRect();
    if (bottom - height * 0.75 <= window.innerHeight) setIsInView(true);
  };

  useEffect(() => {
    // delay only has effect if element is immediately in view;
    const timer = setTimeout(() => {
      delayRef.current = delay;
      onScroll();
    }, LOAD_DELAY);
    return () => clearTimeout(timer);
  }, [delay]);

  useOnWindowScroll(() => {
    delayRef.current = 0;
    onScroll();
  });

  return isLoaded ? (
    <WrapperPlaceholder ref={ref} {...props}>
      <Wrapper $isLoaded={isInView} $offset={offset} $delay={delayRef.current}>
        {children}
      </Wrapper>
    </WrapperPlaceholder>
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

const WrapperPlaceholder = styled.div`
  overflow: visible;
  width: 100%;
`;

const Wrapper = styled.div<{
  $delay: number;
  $offset: number;
  $isLoaded: boolean;
}>`
  width: 100%;

  animation-fill-mode: forwards;
  animation-delay: ${({ $delay }) => $delay}ms;
  animation-duration: ${({ theme }) => theme.speed.slow}ms;
  animation-name: ${({ $offset }) => AnimationFadeIn($offset)};
  animation-play-state: ${({ $isLoaded }) =>
    $isLoaded ? `running` : `paused`};

  transform: ${({ $offset }) => `translateY(${$offset}px)`};
  opacity: 0;
`;
