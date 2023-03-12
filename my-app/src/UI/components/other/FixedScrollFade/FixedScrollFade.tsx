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

  const getStyle = useCallback(
    (scrollY: number) => {
      const transform = getValue(
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

      const pointerEvents = opacity > 0.1 ? `auto` : `none`;

      return {
        transform: `translateY(${transform}px)`,
        opacity: opacity.toString(),
        pointerEvents: pointerEvents,
      };
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

  const style = getStyle(window.scrollY);

  const onScroll = useCallback(
    (scrollY: number) => {
      if (!ref.current) return;
      const style = getStyle(scrollY);
      ref.current.style.transform = style.transform;
      ref.current.style.opacity = style.opacity;
      ref.current.style.pointerEvents = style.pointerEvents;
    },
    [getStyle]
  );

  useOnWindowScroll(onScroll);

  return (
    <Wrapper
      ref={ref}
      $transform={style.transform}
      $opacity={style.opacity}
      $pointerEvents={style.pointerEvents}
      {...props}
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div<{
  $transform: string;
  $opacity: string;
  $pointerEvents: string;
}>`
  width: 100%;
  transition: ${({ theme }) => theme.speed.instant}ms;
  transition-timing-function: linear;

  transform: ${({ $transform }) => $transform};
  opacity: ${({ $opacity }) => $opacity};
  pointer-events: ${({ $pointerEvents }) => $pointerEvents};
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
