import React from 'react';
import styled from 'styled-components';
import { GridSquare, GridSquareProps } from '../GridSquare';

export interface GridSquareLongProps extends GridSquareProps {}

export const GridSquareLong: React.FC<GridSquareLongProps> = ({
  children,
  ...props
}): React.ReactElement => {
  return <Grid {...props}>{children}</Grid>;
};

const Grid = styled(GridSquare)`
  width: 100%;

  flex-wrap: nowrap;
  overflow-x: auto;
`;
