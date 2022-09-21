import React from 'react';
import styled from 'styled-components';
import { Grid, GridProps } from '../Grid';

export interface GridRowProps extends GridProps {
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
}

export const GridRow: React.FC<GridRowProps> = ({
  children,
  paddingTop = 0,
  paddingBottom = 0,
  paddingLeft = 0,
  paddingRight = 0,
  ...props
}): React.ReactElement => {
  return (
    <GridStyled
      _minusWidth={paddingLeft + paddingRight}
      $paddingTop={paddingTop}
      $paddingBottom={paddingBottom}
      $paddingLeft={paddingLeft}
      $paddingRight={paddingRight}
      {...props}
    >
      {children}
    </GridStyled>
  );
};

const GridStyled = styled(Grid)<{
  $paddingTop: number;
  $paddingBottom: number;
  $paddingLeft: number;
  $paddingRight: number;
}>`
  width: 100%;
  flex-wrap: nowrap;
  overflow-x: auto;

  > * {
    padding-top: ${({ $paddingTop }) => $paddingTop}px;
    padding-bottom: ${({ $paddingBottom }) => $paddingBottom}px;

    &:first-child {
      padding-left: ${({ $paddingLeft }) => $paddingLeft}px;
    }

    &:last-child {
      padding-right: ${({ $paddingRight }) => $paddingRight}px;
    }
  }
`;
