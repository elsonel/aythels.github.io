import React, { useMemo } from 'react';
import styled from 'styled-components';
import { GreaterThanHook } from '../../../utility/hooks/ResponsiveProps';
import { GreaterThan } from '../../../utility/styles/ResponsiveCSS';
import { BodyCenter } from '../BodyCenter';

const CENTER_WIDTH = 600; // includes horizontal padding
const HORIZONTAL_PADDING = 20;
const MAX_WIDTH = 2000;
const SNAP_WIDTH = 700;

export interface IBodyWideProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  snapWidth?: number;
}

export const BodyWide: React.FC<IBodyWideProps> = ({
  children,
  snapWidth = SNAP_WIDTH,
  ...props
}): React.ReactElement => (
  <Wrapper {...props}>
    <Layout $snapWidth={snapWidth}>{children}</Layout>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
`;

const CenterLayout = `
  width: min(${CENTER_WIDTH}px, 100%);
  padding: 0px ${HORIZONTAL_PADDING}px;
`;

const WideLayout = `
  width: min(${MAX_WIDTH}px, 100%);
  padding: 0px 6%;
`;

const Layout = styled.div<{ $snapWidth: number }>`
  box-sizing: border-box;

  ${GreaterThan(0, CenterLayout)}
  ${({ $snapWidth }) => GreaterThan($snapWidth, WideLayout)}

  margin: auto;
`;
