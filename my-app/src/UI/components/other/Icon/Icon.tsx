import React from 'react';
import styled from 'styled-components';

export interface IconProps extends React.HTMLAttributes<HTMLImageElement> {
  /**
   * The source ofthe icon
   */
  src: string;
  /**
   * The size of the icon
   */
  size?: number;
}

export const Icon: React.FC<IconProps> = ({
  src,
  size=20,
  ...props
}): React.ReactElement => { 
  return (
    <StyledImg alt="icon" src={src} $size={size} {...props}></StyledImg>
)};

const StyledImg = styled.img<{ $size: number}>`
  width: ${({$size}) => $size}px;
  user-select: none;
`


