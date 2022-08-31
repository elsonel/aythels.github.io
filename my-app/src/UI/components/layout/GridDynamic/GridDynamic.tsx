import React, { ReactElement } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { distributeIntoChunks } from '../../../utility/scripts/Array';
import { GreaterThanHook } from '../../../utility/hooks/ResponsiveProps';
import { ImageThumbnailProps } from '../../atoms/ImageThumbnail';
import { Grid, GridBreakpoint, GridProps } from '../Grid';

export interface GridDynamicProps extends GridProps {
  children?:
    | React.ReactElement<ImageThumbnailProps>[]
    | React.ReactElement<ImageThumbnailProps>;
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
  children = [],
  breakpoints = DEFAULT_BREAKPOINTS,
  ...props
}): React.ReactElement => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  !Array.isArray(children) && (children = [children]);
  let COLUMN_COUNT = 3;

  for (let i = 0; i < breakpoints.length; i++) {
    const breakpoint = breakpoints[i];
    if (GreaterThanHook(breakpoint.minWidth))
      COLUMN_COUNT = breakpoint.columnCount;
  }

  const createColumns = (children: ReactElement[]) => {
    const childPartitions: React.ReactElement[][] = distributeIntoChunks(
      children,
      COLUMN_COUNT
    );

    const elements: any[] = [];

    for (let i = 0; i < COLUMN_COUNT; i++) {
      const imageElements: React.ReactElement<{ $COLUMN_COUNT: number }>[] = [];

      // eslint-disable-next-line no-loop-func
      childPartitions[i].forEach((e, j) => {
        imageElements.push(
          <ItemWrapper key={j} $visible={visible} $index={children.indexOf(e)}>
            {e}
          </ItemWrapper>
        );
      });

      elements.push(<ColumnWrapper key={i}>{imageElements}</ColumnWrapper>);
    }

    return elements;
  };

  return <Grid breakpoints={breakpoints}>{createColumns(children)}</Grid>;
};

const ColumnWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ItemWrapper = styled.div<{ $visible: boolean; $index: number }>`
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  pointer-events: ${({ $visible }) => ($visible ? 'auto' : 'none')};

  transition-duration: ${({ theme }) => theme.speed.slow};
  transition-timing-function: ease-out;
  transition-property: opacity;
  transition-delay: ${({ $index }) => $index * 60}ms;

  width: 100%;
  height: auto;
`;
