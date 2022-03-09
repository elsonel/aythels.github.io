import React from 'react';
import styled from "styled-components";
import { Paragraph } from '../../text/Paragraph/Paragraph';
import { StyledIcon, StyledIconProps } from '@styled-icons/styled-icon'

export interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The icon of the ship
   */
  icon: React.ReactElement<StyledIcon>;
  /**
   * The label of the chip
   */
  label: string;
  /**
   * The size of the chip
   */
  size?: number;
}

export const Chip: React.FC<ChipProps> = ({
  icon,
  label,
  size=20,
  ...props
}): React.ReactElement => { 

  const iconProps: StyledIconProps = { size: size };

  return (
  <Wrapper {...props}>
    {React.isValidElement(icon) && React.cloneElement(icon, iconProps)}
  <Paragraph>{label}</Paragraph>
  </Wrapper>
)};

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  
  padding: 6px 14px;
  
  background: ${({theme}) => theme.colors.textPassive4};
  border-radius: 100px;

  & :first-child {
    color: ${({theme}) => theme.colors.textPassive2};
  }

  & :nth-child(2) {
    margin-left: 10px;
    color: ${({theme}) => theme.colors.textPassive2};
    font-size: ${({theme}) => theme.font.size.small};
    font-weight: ${({theme}) => theme.font.weight.medium};
  }
`