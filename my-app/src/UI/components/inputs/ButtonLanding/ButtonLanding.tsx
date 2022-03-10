import React from 'react';
import styled from 'styled-components';
import { Paragraph } from '../../text/Paragraph/Paragraph';

export interface ButtonLandingProps extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * Button text
   */
  children?: string;  
  /**
   * Reverse button colors
   */
  isReversed?: boolean;
  /**
   * Button size
   */
  size?: 'medium' | 'small';
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export const ButtonLanding: React.FC<ButtonLandingProps> = ({
  children,
  isReversed=false,
  size='medium',
  onClick,
  ...props
}): React.ReactElement => { 
  return (
    <StyledButton $isReversed={isReversed} $size={size} onClick={onClick} {...props}>
      {children && <StyledText $isReversed={isReversed} $size={size} >{children}</StyledText>}
    </StyledButton>
)};

const StyledButton = styled.button<{$isReversed: boolean; $size: 'medium' | 'small'}>`
  cursor: pointer;

  ${({theme, $isReversed, $size}) => `

    padding: ${$size === 'medium' ? `10px 40px` : `8px 30px`};
    border: 1.5px solid ${theme.colors.text};
    transition: ${theme.speed.normal};

    background: ${$isReversed ? theme.colors.background : theme.colors.text};

    &:hover {
      background: ${$isReversed ? theme.colors.text : theme.colors.background};
    }

  `};
`;

const StyledText = styled(Paragraph)<{$isReversed: boolean; $size: 'medium' | 'small'}>`
  ${({theme, $isReversed, $size}) => `

    transition: ${theme.speed.normal};  
    font-weight: ${theme.font.weight.medium}; 
    font-size: ${$size === 'medium' ? theme.font.size.small : theme.font.size.tiny};
    letter-spacing: ${theme.font.spacing.button};

    color: ${$isReversed ? theme.colors.text : theme.colors.background};

    ${StyledButton}:hover & {
      color: ${$isReversed ? theme.colors.background : theme.colors.text};
    }

  `};
`;