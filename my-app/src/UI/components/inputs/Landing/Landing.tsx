import React from 'react';
import styled from 'styled-components';
import { Paragraph } from '../../text/Paragraph/Paragraph';

export interface LandingProps extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * Reverse button colors
   */
  isReversed?: boolean;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export const Landing: React.FC<LandingProps> = ({
  children,
  isReversed=false,
  onClick,
  ...props
}): React.ReactElement => { 
  return (
    <div>
      <StyledButton onClick={onClick} $isReversed={isReversed} {...props}><StyledText>GITHUB</StyledText></StyledButton>
    </div>
)};

const StyledText = styled(Paragraph)`
  transition: ${({theme}) => theme.speed.normal};  
  font-weight: ${({theme}) => theme.font.weight.medium}; 
  font-size: ${({theme}) => theme.font.size.small};
  letter-spacing: ${({theme}) => theme.font.spacing.button};
`;

const StyledButton = styled.button<{$isReversed: boolean}>`

  cursor: pointer;

  ${({theme, $isReversed}) => `
    padding: 12px 40px;

    border: 1.5px solid ${theme.colors.textPassive2};
    transition: ${theme.speed.normal};

    background: ${$isReversed ? theme.colors.background : theme.colors.text};

    &:hover {
      background: ${$isReversed ? theme.colors.text : theme.colors.background};
    }

    > * {
      color: ${$isReversed ? theme.colors.text : theme.colors.background};
    }

    &:hover > * {
      color: ${$isReversed ? theme.colors.background : theme.colors.text};
    }
    `
  };
`

