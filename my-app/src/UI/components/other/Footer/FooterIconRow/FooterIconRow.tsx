import React from 'react';
import styled from "styled-components";
import { Linkedin, Github } from '@styled-icons/fa-brands/';
import { Email } from '@styled-icons/material-rounded/';
import { LinkIcon } from '../../../inputs/LinkIcon/LinkIcon';

export interface FooterIconRowProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Icon size
   */
  size?: number;
}

export const FooterIconRow: React.FC<FooterIconRowProps> = ({
  size=32,
  ...props
}): React.ReactElement => { 
  
  const totalSize = (size * 3) + 20;
  
  return (
  <IconRow $width={totalSize} {...props}>
    <LinkIcon href="https://github.com/aythels" target="_blank" rel="noreferrer">
      <Github size={size}/>
    </LinkIcon>
    <LinkIcon href="https://www.linkedin.com/in/elson-liang/" target="_blank" rel="noreferrer">
      <Linkedin size={size}/>
    </LinkIcon>
    <LinkIcon href="mailto:elsonliang@gmail.com">
      <Email size={size}/>
    </LinkIcon>
  </IconRow>
)};

const IconRow = styled.div<{$width: number}>`
  width: ${({$width}) => $width}px;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
`;