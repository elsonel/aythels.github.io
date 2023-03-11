import React, { useCallback, useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import useOnWindowScroll from '../../../utility/hooks/useOnWindowScroll';
import { clamp } from '../../../utility/scripts/Math';
import { remap } from '../../../utility/scripts/remap';

export enum FADE_MODE {
  IN,
  OUT,
  NONE,
}

export interface FixedScrollFadeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  startY?: number;
  duration?: number;
  offsetY?: number;
  isFullWidth?: boolean;
  fadeMode?: FADE_MODE;
}

export const FixedScrollFade: React.FC<FixedScrollFadeProps> = ({
  children,
  startY = 0,
  duration = 300,
  offsetY,
  isFullWidth = false,
  fadeMode = FADE_MODE.OUT,
  ...props
}): React.ReactElement => {
  const ref = useRef<HTMLDivElement>(null);

  const onScroll = useCallback(
    (scrollY: number) => {
      if (!ref.current) return;

      const finalOffsetY = getValue(
        scrollY,
        startY,
        duration,
        0,
        -(offsetY ?? duration)
      );

      let finalOpacity = 1;

      if (fadeMode === FADE_MODE.OUT)
        finalOpacity = getValue(scrollY, startY, duration, 1, 0);
      else if (fadeMode === FADE_MODE.IN)
        finalOpacity = getValue(scrollY, startY, duration, 0, 1);

      ref.current.style.transform = `translateY(${finalOffsetY}px)`;
      ref.current.style.opacity = finalOpacity + ``;
      ref.current.style.pointerEvents = finalOpacity > 0.1 ? `auto` : `none`;
    },
    [startY, duration, offsetY]
  );

  useLayoutEffect(() => onScroll(0), []);
  useOnWindowScroll(onScroll);

  return (
    <Wrapper ref={ref} $isFullWidth={isFullWidth} {...props}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ $isFullWidth: boolean }>`
  ${({ $isFullWidth }) => $isFullWidth && `width: 100%;`}
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
