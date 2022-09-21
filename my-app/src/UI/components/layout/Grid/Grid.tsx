import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import useOnImagesLoaded from '../../../utility/hooks/useOnImagesLoaded';
import { GreaterThan } from '../../../utility/styles/ResponsiveCSS';

const calculateWidth = (gapPixels: number, columnCount: number) => {
  return `
    width: calc((100% - (${gapPixels}px * ${
    columnCount - 1
  })) / ${columnCount});
  `;
};

const DEFAULT_BREAKPOINTS: GridBreakpoint[] = [
  {
    minWidth: 0,
    columnCount: 1,
  },
  {
    minWidth: 800,
    columnCount: 2,
  },
  {
    minWidth: 1000,
    columnCount: 3,
  },
  {
    minWidth: 1200,
    columnCount: 4,
  },
];

export interface GridBreakpoint {
  minWidth: number;
  columnCount: number;
}

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode[];
  breakpoints?: GridBreakpoint[];
  isAnimated?: boolean;
}

export const Grid: React.FC<GridProps> = ({
  children,
  breakpoints = DEFAULT_BREAKPOINTS,
  isAnimated = true,
  ...props
}): React.ReactElement => {
  const [isLoaded, ref, onImageLoad] = useOnImagesLoaded();

  return (
    <Wrapper ref={ref} onLoad={onImageLoad} onError={onImageLoad} {...props}>
      {children.map((component, index) => (
        <ItemWrapper
          $breakpoints={breakpoints}
          key={index}
          $isVisible={isLoaded}
          $index={index}
          $isAnimated={isAnimated}
        >
          {component}
        </ItemWrapper>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const ItemWrapper = styled.div<{
  $breakpoints: GridBreakpoint[];
  $isVisible: boolean;
  $index: number;
  $isAnimated: boolean;
}>`
  flex-shrink: 0;

  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  pointer-events: ${({ $isVisible }) => ($isVisible ? 'auto' : 'none')};

  transition-duration: ${({ theme }) => theme.speed.slow};
  transition-timing-function: ease-out;
  transition-property: opacity;
  transition-delay: ${({ $index }) => $index * 60}ms;

  ${({ $isAnimated }) => !$isAnimated && `transition-delay: none;`}

  ${({ $breakpoints }) =>
    $breakpoints
      .map((e) => GreaterThan(e.minWidth, calculateWidth(20, e.columnCount)))
      .join('\r\n')};
`;
