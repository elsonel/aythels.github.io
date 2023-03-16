import React from 'react';
import styled from 'styled-components';

export interface IIconProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number | string;
  children?: React.ReactNode;
}

export const IIcon: React.FC<IIconProps> = ({
  size = 32,
  children,
  ...props
}): React.ReactElement => {
  return (
    <Wrapper $size={size} {...props}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ $size: number | string }>`
  overflow: hidden;
  flex-shrink: 0;
  width: ${({ $size }) => (typeof $size === 'number' ? `${$size}px` : $size)};
  height: ${({ $size }) => (typeof $size === 'number' ? `${$size}px` : $size)};

  display: flex;
  justify-content: center;
  align-items: center;

  > * {
    width: 100%;
    height: 100%;
  }
`;
