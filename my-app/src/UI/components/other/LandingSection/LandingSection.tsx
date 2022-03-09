import React from 'react';
import styled from 'styled-components';

export interface LandingSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The size of the icon
   */
  size?: number;
}

export const LandingSection: React.FC<LandingSectionProps> = ({
  children,
  ...props
}): React.ReactElement => { 
  return (
    <div>
      Hi
    </div>
)};


