import React from 'react';
import styled from "styled-components";

export interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The size of the logo
   */
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({
  size=32,
  ...props
}): React.ReactElement => { 
  
  return (
    <LogoStyled $size={size} alt="logo" src={`/icons/logo.svg`} {...props}></LogoStyled>
)};

const LogoStyled = styled.img<{$size: number}>`
  width: ${({$size}) => $size}px;
`;