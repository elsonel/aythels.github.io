import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { GreaterThan } from '../../../utility/ResponsiveCSS';
import { ImageThumbnailProps } from '../../atoms/ImageThumbnail';

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
    minWidth: 600,
    columnCount: 2,
  },
  {
    minWidth: 800,
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

export interface GridSquareProps extends React.HTMLAttributes<HTMLDivElement> {
  children?:
    | React.ReactElement<ImageThumbnailProps>[]
    | React.ReactElement<ImageThumbnailProps>;
  breakpoints?: GridBreakpoint[];
}

export const GridSquare: React.FC<GridSquareProps> = ({
  children = [],
  breakpoints = DEFAULT_BREAKPOINTS,
  ...props
}): React.ReactElement => {
  const [visible, setVisible] = useState(false);

  !Array.isArray(children) && (children = [children]);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <Wrapper {...props}>
      {children.map((component, index) => (
        <ItemWrapper
          $breakpoints={breakpoints}
          key={index}
          $visible={visible}
          $index={index}
        >
          {component}
        </ItemWrapper>
      ))}
    </Wrapper>
  );
};

// https://spectrum.chat/styled-components/general/how-to-apply-styles-to-children~adf92232-33f8-47a6-a378-77c64d649a40

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 20px;

  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const ItemWrapper = styled.div<{
  $breakpoints: GridBreakpoint[];
  $visible: boolean;
  $index: number;
}>`
  flex-shrink: 0;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  pointer-events: ${({ $visible }) => ($visible ? 'auto' : 'none')};
  transition: opacity ${({ theme }) => theme.speed.slow} ease-out
    ${({ $index }) => $index * 60}ms;

  > * {
    width: 100% !important;
    height: 100% !important;
  }

  ${({ $breakpoints }) =>
    $breakpoints
      .map((e) => GreaterThan(e.minWidth, calculateWidth(20, e.columnCount)))
      .join('\r\n')};
  aspect-ratio: 1;
`;
