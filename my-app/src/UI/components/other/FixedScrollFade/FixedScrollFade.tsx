import React, { useCallback, useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import useOnWindowScroll from '../../../utilities/hooks/useOnWindowScroll';
import { clamp } from '../../../utilities/scripts/Math';
import { remap } from '../../../utilities/scripts/remap';

export interface FixedScrollFadeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  scrollStart?: number;
  scrollDuration?: number;
  initialOffsetY?: number;
  finalOffsetY?: number;
  initialOpacity?: number;
  finalOpacity?: number;
  initialBrightness?: number;
  finalBrightness?: number;
}

export const FixedScrollFade: React.FC<FixedScrollFadeProps> = ({
  children,
  scrollStart = 0,
  scrollDuration = 300,
  initialOffsetY = 0,
  finalOffsetY = scrollDuration,
  initialOpacity = 1,
  finalOpacity = 0,
  initialBrightness = 1,
  finalBrightness = 1,
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

      const brightness = getValue(
        scrollY,
        scrollStart,
        scrollDuration,
        initialBrightness,
        finalBrightness
      );

      const pointerEvents = opacity > 0.1 ? `inherit` : `none`;

      return {
        transform: `translateY(${transform}px)`,
        opacity: opacity.toString(),
        brightness: `brightness(${brightness})`,
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
      initialBrightness,
      finalBrightness,
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
      ref.current.style.filter = style.brightness;
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
