import React, { ReactElement } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { distributeIntoChunks } from '../../../utility/scripts/Array';
import { GreaterThanHook } from '../../../utility/hooks/ResponsiveProps';
import { Grid, GridBreakpoint, GridProps } from '../Grid';
import { v4 as uuidv4 } from 'uuid';

export interface GridDynamicProps extends GridProps {
  children: React.ReactNode[];
  breakpoints?: GridBreakpoint[];
}

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

export const GridDynamic: React.FC<GridDynamicProps> = ({
  children,
  breakpoints = DEFAULT_BREAKPOINTS,
  ...props
}): React.ReactElement => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

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

    const allElements: any[] = childPartitions.map((group) => (
      <ColumnWrapper key={uuidv4()}>
        {group.map((component) => (
          <ItemWrapper
            $isVisible={isVisible}
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
    <Grid breakpoints={breakpoints} {...props}>
      {createColumns(children)}
    </Grid>
  );
};

const ColumnWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ItemWrapper = styled.div<{ $isVisible: boolean; $index: number }>`
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  pointer-events: ${({ $isVisible }) => ($isVisible ? 'auto' : 'none')};

  transition-duration: ${({ theme }) => theme.speed.slow};
  transition-timing-function: ease-out;
  transition-property: opacity;
  transition-delay: ${({ $index }) => $index * 60}ms;

  width: 100%;
  height: auto;
`;
