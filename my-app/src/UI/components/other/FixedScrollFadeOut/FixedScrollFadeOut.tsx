import React, { useRef } from 'react';
import styled from 'styled-components';
import useOnWindowScroll from '../../../utility/hooks/useOnWindowScroll';
import { clamp } from '../../../utility/scripts/Math';
import { remap } from '../../../utility/scripts/remap';

export interface FixedScrollFadeOutProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  startY?: number;
  duration?: number;
  offsetY?: number;
}

export const FixedScrollFadeOut: React.FC<FixedScrollFadeOutProps> = ({
  children,
  startY = 0,
  duration = 300,
  offsetY,
  ...props
}): React.ReactElement => {
  const ref = useRef<HTMLDivElement>(null);
  useOnWindowScroll((scrollY: number) => {
    if (!ref.current) return;

    const finalOffsetY = getValue(
      scrollY,
      startY,
      duration,
      0,
      -(offsetY ?? duration)
    );
    const finalOpacity = getValue(scrollY, startY, duration, 1, 0);

    ref.current.style.transform = `translateY(${finalOffsetY}px)`;
    ref.current.style.opacity = finalOpacity + ``;
  });

  return (
    <Wrapper ref={ref} {...props}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  transition: ${({ theme }) => theme.speed.instant}ms;
  transition-timing-function: linear;
`;

function getValue(
  scrollY: number,
  startY: number,
  duration: number,
  initialValue: number,
  finalValue: number
) {
  const finalOffset = clamp(scrollY, startY, startY + duration);
  return remap(
    finalOffset,
    startY,
    startY + duration,
    initialValue,
    finalValue
  );
}
