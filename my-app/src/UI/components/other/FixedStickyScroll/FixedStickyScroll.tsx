import useResizeObserver from '@react-hook/resize-observer';
import React, { useCallback, useRef } from 'react';
import styled, { useTheme } from 'styled-components';
import useOnWindowResize from '../../../utility/hooks/useOnWindowResize';
import useOnWindowScroll from '../../../utility/hooks/useOnWindowScroll';

export interface FixedStickyScrollProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  scrollSpeed?: number;
  topLimit?: number;
  isFullWidth?: boolean;
}

export const FixedStickyScroll: React.FC<FixedStickyScrollProps> = ({
  children,
  scrollSpeed = 1,
  topLimit = 0,
  isFullWidth = false,
  ...props
}): React.ReactElement => {
  const { speed } = useTheme();
  const ref = useRef<HTMLDivElement>(null);
  const currentTransform = useRef<number>(0);
  const maxOffsetTop = useRef<number>();

  const setTransform = useCallback(
    (offsetY: number, isTransitionEnabled = true) => {
      if (!ref.current || !maxOffsetTop.current) return;
      currentTransform.current = Math.min(
        maxOffsetTop.current,
        offsetY * scrollSpeed
      );

      ref.current.style.transform = `translateY(${-currentTransform.current}px)`;
      ref.current.style.transitionDuration = isTransitionEnabled
        ? speed.instant + 'ms'
        : '0ms';
    },
    [scrollSpeed]
  );

  const onResize = useCallback(() => {
    if (!ref.current) return;

    const distTop = ref.current.getBoundingClientRect().top;
    const currentOffset = currentTransform.current;

    maxOffsetTop.current = distTop + currentOffset - topLimit;
    setTransform(window.pageYOffset, false);
  }, [topLimit, setTransform]);

  useResizeObserver(ref, onResize);

  useOnWindowResize(onResize);

  useOnWindowScroll(setTransform);

  return (
    <Wrapper ref={ref} $isFullWidth={isFullWidth} {...props}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ $isFullWidth: boolean }>`
  ${({ $isFullWidth }) => $isFullWidth && `width: 100%;`}
  transition-timing-function: linear;
`;
