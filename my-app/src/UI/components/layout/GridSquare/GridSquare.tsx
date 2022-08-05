import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';
import { LessThan } from '../../../utility/ResponsiveCSS';
import { ImageThumbnailProps } from '../../atoms/ImageThumbnail';

const calculateWidth = (gapPixels: number, columnCount: number) => {
  return `
    width: calc((100% - (${gapPixels}px * ${
    columnCount - 1
  })) / ${columnCount});
  `;
};

export interface GridSquareProps extends React.HTMLAttributes<HTMLDivElement> {
  children?:
    | React.ReactElement<ImageThumbnailProps>[]
    | React.ReactElement<ImageThumbnailProps>;
  columnCount?: number;
}

export const GridSquare: React.FC<GridSquareProps> = ({
  children = [],
  columnCount = 4,
  ...props
}): React.ReactElement => {
  const [visible, setVisible] = useState(false);

  !Array.isArray(children) && (children = [children]);
  columnCount = Math.max(0, Math.min(Math.round(columnCount), 4));

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <Wrapper {...props}>
      {children.map((component, index) => (
        <ItemWrapper
          $columnCount={columnCount}
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

const SquareSize = (columnCount: number) => css`
  ${calculateWidth(20, columnCount)}

  ${LessThan(1200, calculateWidth(20, Math.min(3, columnCount)))}

  ${LessThan(800, calculateWidth(20, Math.min(2, columnCount)))}

  ${LessThan(600, calculateWidth(20, Math.min(1, columnCount)))}
`;

const ItemWrapper = styled.div<{
  $columnCount: number;
  $visible: boolean;
  $index: number;
}>`
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  pointer-events: ${({ $visible }) => ($visible ? 'auto' : 'none')};
  transition: opacity ${({ theme }) => theme.speed.slow} ease-out
    ${({ $index }) => $index * 60}ms;

  > * {
    width: 100% !important;
    height: 100% !important;
  }

  ${({ $columnCount }) => SquareSize($columnCount)};
  aspect-ratio: 1;
`;
