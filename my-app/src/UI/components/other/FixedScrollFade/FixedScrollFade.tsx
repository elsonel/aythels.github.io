import React, { useCallback, useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import useOnWindowScroll from '../../../utility/hooks/useOnWindowScroll';
import { clamp } from '../../../utility/scripts/Math';
import { remap } from '../../../utility/scripts/remap';

export interface FixedScrollFadeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  scrollStart?: number;
  scrollDuration?: number;
  initialOffsetY?: number;
  finalOffsetY?: number;
  initialOpacity?: number;
  finalOpacity?: number;
}

export const FixedScrollFade: React.FC<FixedScrollFadeProps> = ({
  children,
  scrollStart = 0,
  scrollDuration = 300,
  initialOffsetY = 0,
  finalOffsetY = scrollDuration,
  initialOpacity = 1,
  finalOpacity = 0,
  ...props
}): React.ReactElement => {
  const ref = useRef<HTMLDivElement>(null);

  const onScroll = useCallback(
    (scrollY: number) => {
      if (!ref.current) return;

      const transformY = getValue(
        scrollY,
        scrollStart,
        scrollDuration,
        initialOffsetY,
        finalOffsetY
      );

      const opacity = getValue(
        scrollY,
        scrollStart,
        scrollDuration,
        initialOpacity,
        finalOpacity
      );

      ref.current.style.transform = `translateY(${transformY}px)`;
      ref.current.style.opacity = opacity + ``;
      ref.current.style.pointerEvents = opacity > 0.1 ? `auto` : `none`;
    },
    [
      scrollStart,
      scrollDuration,
      initialOffsetY,
      finalOffsetY,
      initialOpacity,
      finalOpacity,
    ]
  );

  useLayoutEffect(() => onScroll(0), []);
  useOnWindowScroll(onScroll);

  return (
    <Wrapper ref={ref} {...props}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
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
