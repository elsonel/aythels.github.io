import React from 'react';
import styled from 'styled-components';
import { IIconProps } from '../../atoms/IIcon';

export interface RowIconProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Icon size
   */
  size?: number;
  /**
   * Icons
   */
  children?: React.ReactElement<IIconProps>[];
  /**
   * Gap size, defaults to half the icon size
   */
  gap?: number;
}

export const RowIcon: React.FC<RowIconProps> = ({
  size = 32,
  children = [],
  gap,
  ...props
}): React.ReactElement => {
  return (
    <Row $gapSize={gap ? gap : size / 2} {...props}>
      {children.map((e, i) => (
        <IconWrapper $size={size} key={i}>
          {e}
        </IconWrapper>
      ))}
    </Row>
  );
};

const Row = styled.div<{ $gapSize: number }>`
  display: inline-flex;
  gap: ${({ $gapSize }) => $gapSize}px;
`;

const IconWrapper = styled.div<{ $size: number }>`
  flex-shrink: 0;

  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;

  > * {
    width: inherit;
    height: inherit;
  }
`;
