import React from 'react';
import styled from 'styled-components';
import useOnImagesLoaded from '../../../utility/hooks/useOnImagesLoaded';
import { GreaterThan } from '../../../utility/styles/ResponsiveCSS';

export const GRID_GAP = 20;

const calculateWidth = (
  gap: number,
  columnCount: number,
  _minusWidth: number
) => {
  return `
    width: calc((100% - ${_minusWidth}px - ${
    (columnCount - 1) * gap
  }px) / ${columnCount});
  `;
};

const getMediaQueries = (
  gap: number,
  breakpoints: GridBreakpoint[],
  _minusWidth: number
) => {
  const allQueries = breakpoints.map((e) =>
    GreaterThan(e.minWidth, calculateWidth(gap, e.columnCount, _minusWidth))
  );

  return allQueries.join('\r\n');
};

export const DEFAULT_BREAKPOINTS: GridBreakpoint[] = [
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
  gap?: number;
  _minusWidth?: number;
  isAnimated?: boolean;
}

export const Grid: React.FC<GridProps> = ({
  children,
  breakpoints = DEFAULT_BREAKPOINTS,
  gap = GRID_GAP,
  _minusWidth = 0,
  isAnimated = true,
  ...props
}): React.ReactElement => {
  const [isLoaded, ref, onImageLoad] = useOnImagesLoaded();

  return (
    <Wrapper
      ref={ref}
      onLoad={onImageLoad}
      onError={onImageLoad}
      $gap={gap}
      {...props}
    >
      {children.map((component, index) => (
        <ItemWrapper
          key={index}
          $index={index}
          $isVisible={isLoaded}
          $isAnimated={isAnimated}
          $queries={getMediaQueries(gap, breakpoints, _minusWidth)}
        >
          {component}
        </ItemWrapper>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ $gap: number }>`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  gap: ${({ $gap }) => $gap}px;
`;

const ItemWrapper = styled.div<{
  $index: number;
  $isVisible: boolean;
  $isAnimated: boolean;
  $queries: string;
}>`
  flex-shrink: 0;

  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  pointer-events: ${({ $isVisible }) => ($isVisible ? 'auto' : 'none')};

  transition-duration: ${({ theme }) => theme.speed.slow};
  transition-timing-function: ease-out;
  transition-property: opacity;
  transition-delay: ${({ $index }) => $index * 60}ms;
  ${({ $isAnimated }) => !$isAnimated && `transition-delay: none;`}

  ${({ $queries }) => $queries}
`;
