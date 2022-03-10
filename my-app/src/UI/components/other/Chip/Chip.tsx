import React from 'react';
import styled from "styled-components";
import { Paragraph } from '../../text/Paragraph/Paragraph';
import { StyledIconProps } from '@styled-icons/styled-icon'
import { Icon, IconProps } from '../Icon/Icon';

export interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The icon of the ship
   */
  icon: React.ReactElement;
  /**
   * The label of the chip
   */
  label: string;
  /**
   * The size of the chip
   */
  size?: "medium" | "small";
}

export const Chip: React.FC<ChipProps> = ({
  icon,
  label,
  size="medium",
  ...props
}): React.ReactElement => { 

  const iconSize = (size === "medium" ? 20 : 16) - (icon.type === Icon ? 2 : 0);
  const iconProps: StyledIconProps | IconProps = { size: iconSize };

  return (
  <div {...props}>
    {size === "medium" ? 
      <Medium>
        {React.isValidElement(icon) && React.cloneElement(icon, iconProps)}
        <Paragraph>{label}</Paragraph>
      </Medium>   
      :
      <Small>
        {React.isValidElement(icon) && React.cloneElement(icon, iconProps)}
        <Paragraph>{label}</Paragraph>
      </Small>
    }
  </div>
)};

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  
  background: ${({theme}) => theme.colors.textPassive4};
  border-radius: 100px;

  & :first-child {
    color: ${({theme}) => theme.colors.textPassive2};
  }

  & :nth-child(2) {
    color: ${({theme}) => theme.colors.textPassive2};
    font-weight: ${({theme}) => theme.font.weight.medium};
  }
`

const Medium = styled(Wrapper)`
  padding: 6px 14px;
  & :nth-child(2) {
    margin-left: 10px;
    font-size: ${({theme}) => theme.font.size.small};
  }
`;

const Small = styled(Wrapper)`
  padding: 4px 12px;
  & :nth-child(2) {
    margin-left: 8px;
    font-size: ${({theme}) => theme.font.size.tiny};
  }
`;