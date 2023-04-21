import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import useOnKeyDown from '../../../utilities/hooks/useOnKeyDown';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  isDisabled?: boolean;
  border?: string;
  borderHovered?: string;
  color?: string;
  colorHovered?: string;
  isClickStateEnabled?: boolean;
  keys?: string[];
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
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
  keys = [],
  onClick,
  onMouseEnter,
  onMouseLeave,
  onMouseDown,
  onMouseUp,
  ...props
}): React.ReactElement => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);

  const onKeyDown = useCallback(
    (key: string) => {
      if (isDisabled) return;
      if (keys.some((e) => e === key)) {
        if (ref.current) {
          ref.current.focus();
          ref.current.click();
        }
      }
    },
    [isDisabled, keys]
  );

  useOnKeyDown(onKeyDown);

  return (
    <ButtonStyled
      ref={ref}
      onMouseEnter={() => {
        setIsHovered(true);
        onMouseEnter && onMouseEnter();
      }}
      onMouseLeave={() => {
        ref.current && ref.current.blur();
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
      disabled={isDisabled}
      onClick={(e) => {
        e.preventDefault();
        onClick && onClick(e);
      }}
      {...props}
    >
      {children}
    </ButtonStyled>
  );
};

const ButtonDisabled = css`
  opacity: 0.4;
  cursor: not-allowed;
`;

const ButtonEnabled = css<{ $isHovered: boolean }>`
  opacity: ${({ $isHovered }) => ($isHovered ? 1 : 0.8)};
  cursor: pointer;
`;

const ButtonStyled = styled.button<{
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

  border: 1px solid
    ${({ $isHovered, $border, $borderHovered }) =>
      $isHovered ? $borderHovered : $border};
  background-color: ${({ $isHovered, $color, $colorHovered }) =>
    $isHovered ? $colorHovered : $color};
  transition: ${({ theme }) => theme.speed.normal}ms;
  user-select: none;

  &:focus {
    outline: none;
    border-color: ${({ $borderHovered }) => $borderHovered};
  }

  ${ButtonEnabled}

  &:disabled {
    ${ButtonDisabled}
  }
`;
