import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { distributeIntoChunks } from '../../../utility/Array';
import { GreaterThanHook } from '../../../utility/ResponsiveProps';
import { ImageThumbnailProps } from '../../atoms/ImageThumbnail';
import { GridBreakpoint } from '../GridSquare';

export interface GridDynamicProps extends React.HTMLAttributes<HTMLDivElement> {
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
    minWidth: 600,
    columnCount: 2,
  },
  {
    minWidth: 800,
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

  let COLUMN_COUNT = 3;

  for (let i = 0; i < breakpoints.length; i++) {
    const breakpoint = breakpoints[i];
    if (GreaterThanHook(breakpoint.minWidth))
      COLUMN_COUNT = breakpoint.columnCount;
  }

  const createColumns = () => {
    !Array.isArray(children) && (children = [children]);

    const childPartitions: React.ReactElement[][] = distributeIntoChunks(
      children,
      COLUMN_COUNT
    );

    let imageIndex = 0;
    const elements: any[] = [];

    for (let i = 0; i < COLUMN_COUNT; i++) {
      const imageElements: React.ReactElement<{ $COLUMN_COUNT: number }>[] = [];

      // eslint-disable-next-line no-loop-func
      childPartitions[i].forEach((e, j) => {
        imageElements.push(
          <ItemWrapper key={j} $visible={visible} $index={imageIndex}>
            {e}
          </ItemWrapper>
        );

        imageIndex += 1;
      });

      elements.push(
        <ColumnWrapper key={i} $COLUMN_COUNT={COLUMN_COUNT}>
          {imageElements}
        </ColumnWrapper>
      );
    }

    return elements;
  };

  return <Wrapper {...props}>{createColumns()}</Wrapper>;
};

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 20px;
  width: 100%;

  display: flex;
  gap: 20px;
`;

const ColumnWrapper = styled.div<{ $COLUMN_COUNT: number }>`
  width: ${({ $COLUMN_COUNT }) => 100 / $COLUMN_COUNT}%;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ItemWrapper = styled.div<{ $visible: boolean; $index: number }>`
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  pointer-events: ${({ $visible }) => ($visible ? 'auto' : 'none')};
  transition: opacity ${({ theme }) => theme.speed.slow} ease-out
    ${({ $index }) => $index * 60}ms;

  width: 100%;

  > * {
    width: 100% !important;
    height: 100% !important;
  }
`;
