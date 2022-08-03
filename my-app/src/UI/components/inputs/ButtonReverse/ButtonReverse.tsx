import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Button, ButtonProps } from '../Button';

export interface ButtonReverseProps extends ButtonProps {
  children?: string;
  borderReversed?: string;
  primaryReversed?: string;
  secondaryReversed?: string;
  isActive?: boolean;
  isDisabled?: boolean;
}

export const ButtonReverse: React.FC<ButtonReverseProps> = ({
  children,
  borderReversed,
  primaryReversed = '#F37676',
  secondaryReversed = 'white',
  isActive = false,
  isDisabled = false,
  onClick,
  ...props
}): React.ReactElement => {
  const [isHovered, setHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <ButtonStyled
      onClick={onClick}
      $isClicked={isClicked}
      $isHovered={isActive ? true : isHovered}
      isDisabled={isDisabled}
      $borderReversed={borderReversed || primaryReversed}
      $primaryReversed={primaryReversed}
      $secondaryReversed={secondaryReversed}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setIsClicked(false);
        setHovered(false);
      }}
      onMouseDown={() => setIsClicked(true)}
      onMouseUp={() => setIsClicked(false)}
      {...props}
    >
      {children}
    </ButtonStyled>
  );
};

const ButtonHovered = css<{
  $primaryReversed: string;
  $secondaryReversed: string;
  $borderReversed: string;
}>`
  border-color: ${({ $borderReversed }) => $borderReversed};
  background-color: ${({ $secondaryReversed }) => $secondaryReversed};

  & :first-child > * {
    color: ${({ $primaryReversed }) => $primaryReversed};
  }
`;

const ButtonStyled = styled(Button)<{
  $isClicked: boolean;
  $isHovered: boolean;
  isDisabled: boolean;
  $borderReversed: string;
  $primaryReversed: string;
  $secondaryReversed: string;
}>`
  ${({ $isHovered }) => $isHovered && ButtonHovered}

  opacity: ${({ isDisabled, $isClicked }) =>
    !isDisabled && ($isClicked ? 0.8 : 1.0)};
`;
