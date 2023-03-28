import React from 'react';
import styled, { keyframes } from 'styled-components';

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  isLoaded?: boolean;
  delay?: number;
}

export const Divider: React.FC<DividerProps> = ({
  isLoaded = true,
  delay = 0,
  ...props
}): React.ReactElement => (
  <Line $isLoaded={isLoaded} $delay={delay} {...props} />
);

const Animation = keyframes`
  0% {
    opacity: 0;
    width: 0%;
  }
  100% {
    opacity: 1;
    width: 100%;
  }
`;

const Line = styled.div<{ $isLoaded: boolean; $delay: number }>`
  box-sizing: border-box;
  height: 2px;
  width: 0%;
  opacity: 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.outline};

  animation-fill-mode: forwards;
  animation-duration: ${({ theme }) => theme.speed.slow}ms;
  animation-delay: ${({ $delay }) => $delay}ms;
  animation-name: ${({ $isLoaded }) => ($isLoaded ? Animation : 'none')};
`;
