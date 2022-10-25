import React, { useState } from 'react';
import styled, { css } from 'styled-components';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  isDisabled?: boolean;
  border?: string;
  borderHovered?: string;
  color?: string;
  colorHovered?: string;
  isClickStateEnabled?: boolean;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onMouseDown?: () => void;
  onMouseUp?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  isDisabled = false,
  border,
  borderHovered,
  color = '#F37676',
  colorHovered,
  isClickStateEnabled = true,
  onClick,
  onMouseEnter,
  onMouseLeave,
  onMouseDown,
  onMouseUp,
  ...props
}): React.ReactElement => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <ButtonStyled
      type="button"
      onMouseEnter={() => {
        setIsHovered(true);
        onMouseEnter && onMouseEnter();
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        onMouseLeave && onMouseLeave();
      }}
      onMouseDown={() => {
        isClickStateEnabled && setIsHovered(false);
        onMouseDown && onMouseDown();
      }}
      onMouseUp={() => {
        isClickStateEnabled && setIsHovered(true);
        onMouseUp && onMouseUp();
      }}
      $isHovered={isHovered}
      $border={border || color}
      $borderHovered={borderHovered || border || color}
      $color={color}
      $colorHovered={colorHovered || color}
      $isDisabled={isDisabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </ButtonStyled>
  );
};

const ButtonDisabled = css`
  opacity: 0.4;
  cursor: default;
  pointer-events: none;
`;

const ButtonEnabled = css<{ $isHovered: boolean }>`
  opacity: ${({ $isHovered }) => ($isHovered ? 0.8 : 1.0)};
  cursor: pointer;
`;

const ButtonStyled = styled.button<{
  $isDisabled: boolean;
  $border: string;
  $borderHovered: string;
  $color: string;
  $colorHovered: string;
  $isHovered: boolean;
}>`
  flex-shrink: 0;
  box-sizing: border-box;
  padding: 0px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1.5px solid
    ${({ $isHovered, $border, $borderHovered }) =>
      $isHovered ? $borderHovered : $border};
  background-color: ${({ $isHovered, $color, $colorHovered }) =>
    $isHovered ? $colorHovered : $color};
  transition: ${({ theme }) => theme.speed.normal};
  user-select: none;

  ${({ $isDisabled }) => ($isDisabled ? ButtonDisabled : ButtonEnabled)}

  > * {
    transition: ${({ theme }) => theme.speed.normal};
  }
`;
