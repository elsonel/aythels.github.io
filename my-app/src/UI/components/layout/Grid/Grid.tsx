import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
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
}

export const Grid: React.FC<GridProps> = ({
  children,
  breakpoints = DEFAULT_BREAKPOINTS,
  ...props
}): React.ReactElement => {
  const [visible, setVisible] = useState(false);

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

const Wrapper = styled.div`
  width: 100%;

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
  transition-duration: ${({ theme }) => theme.speed.slow};
  transition-timing-function: ease-out;
  transition-property: opacity;
  transition-delay: ${({ $index }) => $index * 600}ms;

  ${({ $breakpoints }) =>
    $breakpoints
      .map((e) => GreaterThan(e.minWidth, calculateWidth(20, e.columnCount)))
      .join('\r\n')};
`;
