import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import useOnWindowScroll from '../../../utility/hooks/useOnWindowScroll';
import { useInView } from 'react-intersection-observer';

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

  const { ref, inView } = useInView({
    threshold: 0.25,
  });

  useEffect(() => {
    if (!isLoaded) return;

    const timer = setTimeout(() => {
      delayRef.current = 0;
    }, delay);
    return () => clearTimeout(timer);
  }, [isLoaded]);

  useEffect(() => {
    if (!isLoaded) delayRef.current = delay;
  }, [isLoaded]);

  useEffect(() => {
    if (inView && isLoaded) setIsInView(true);
    else if (!inView && !isLoaded) setIsInView(false);
  }, [inView, isLoaded]);

  return (
    <Wrapper {...props}>
      <Content>
        <Placeholder ref={ref}>{children}</Placeholder>
        <Copy
          $offset={offset}
          $delay={delayRef.current}
          $isLoaded={isLoaded && isInView}
        >
          {children}
        </Copy>
      </Content>
    </Wrapper>
  );
};

const AnimationFadeIn = (offset: number) =>
  keyframes`
    0% {
      transform: translateY(${offset}px);
    }
    100% { 
      transform: translateY(0px);
    }
  `;

const Wrapper = styled.div`
  width: 100%;
`;

const Content = styled.div`
  margin: inherit;
  position: relative;
  overflow: visible;
  width: 100%;
`;

const Copy = styled.div<{
  $delay: number;
  $offset: number;
  $isLoaded: boolean;
}>`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;

  animation-delay: ${({ $delay }) => $delay}ms;
  animation-duration: ${({ theme }) => theme.speed.slow}ms;
  animation-name: ${({ $isLoaded, $offset }) =>
    $isLoaded ? AnimationFadeIn($offset) : 'none'};
  animation-fill-mode: forwards;

  transition: ${({ theme }) => theme.speed.slow}ms;
  transition-delay: ${({ $delay }) => $delay}ms;
  opacity: ${({ $isLoaded }) => ($isLoaded ? 1 : 0)};

  > * {
    margin-top: 0px !important;
    margin-bottom: 0px !important;
  }
`;

const Placeholder = styled.div`
  width: 100%;
  opacity: 0;
  pointer-events: 0;
`;
