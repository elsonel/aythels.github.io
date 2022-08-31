import React from 'react';
import styled from 'styled-components';
import { Grid, GridProps } from '../Grid';

export interface GridRowProps extends GridProps {}

export const GridRow: React.FC<GridRowProps> = ({
  children,
  ...props
}): React.ReactElement => {
  return <GridStyled {...props}>{children}</GridStyled>;
};

const GridStyled = styled(Grid)`
  width: 100%;

  flex-wrap: nowrap;
  overflow-x: auto;
`;
