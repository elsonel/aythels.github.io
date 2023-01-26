import React from 'react';
import styled from 'styled-components';
import { distributeIntoChunks } from '../../../utility/scripts/Array';
import { GreaterThanHook } from '../../../utility/hooks/ResponsiveProps';
import { Grid, GridBreakpoint, GridProps } from '../Grid';
import useOnImagesLoaded from '../../../utility/hooks/useOnImagesLoaded';

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
];

export interface GridDynamicProps extends GridProps {
  children: React.ReactNode[];
  breakpoints?: GridBreakpoint[];
}

/*
 * Basically the key of each column wrapper is "COLUMN_COUNT + i.toString()"
 * because if GridDynamic re-renders, the column stays the same unless the
 * COLUMN_COUNT changes, which then means a completely new column is created
 *
 */

export const GridDynamic: React.FC<GridDynamicProps> = ({
  children,
  breakpoints = DEFAULT_BREAKPOINTS,
  ...props
}): React.ReactElement => {
  const [isLoaded, ref, onImageLoad] = useOnImagesLoaded();

  let COLUMN_COUNT = 3;
  for (let i = 0; i < breakpoints.length; i++) {
    const breakpoint = breakpoints[i];
    if (GreaterThanHook(breakpoint.minWidth))
      COLUMN_COUNT = breakpoint.columnCount;
  }

  const createColumns = (children: React.ReactNode[]) => {
    const childPartitions: React.ReactNode[][] = distributeIntoChunks(
      children,
      COLUMN_COUNT
    );

    const allElements: any[] = childPartitions.map((group, i) => (
      <ColumnWrapper key={COLUMN_COUNT + i.toString()}>
        {group.map((component) => (
          <ItemWrapper
            $isVisible={isLoaded}
            $index={children.indexOf(component)}
            key={children.indexOf(component)}
          >
            {component}
          </ItemWrapper>
        ))}
      </ColumnWrapper>
    ));

    return allElements;
  };

  return (
    <div ref={ref} onLoad={onImageLoad} onError={onImageLoad} {...props}>
      <Grid breakpoints={breakpoints} isAnimated={false}>
        {createColumns(children)}
      </Grid>
    </div>
  );
};

const ColumnWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ItemWrapper = styled.div<{ $isVisible: boolean; $index: number }>`
  width: 100%;

  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  pointer-events: ${({ $isVisible }) => ($isVisible ? 'auto' : 'none')};
  transition-duration: ${({ theme }) => theme.speed.slow}ms;
  transition-timing-function: ease-out;
  transition-property: opacity;
  transition-delay: ${({ $index }) => $index * 60}ms;
`;
