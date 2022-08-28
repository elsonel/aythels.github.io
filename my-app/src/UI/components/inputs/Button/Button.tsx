import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { StyledIcon, StyledIconProps } from '@styled-icons/styled-icon';
import { TextButton } from '../../text/TextButton';
import { IIconProps } from '../../atoms/IIcon';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: string;
  icon?: React.ReactElement<IIconProps>;
  isDisabled?: boolean;
  border?: string;
  primary?: string;
  secondary?: string;
  size?: 'medium' | 'small';
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  icon,
  isDisabled = false,
  border,
  primary = '#F37676',
  secondary = 'white',
  size = 'medium',
  onClick,
  ...props
}): React.ReactElement => {
  const iconProps: IIconProps = { size: size === 'medium' ? 18 : 16 };
  const [hoverState, setHoverState] = useState(false);

  return (
    <ButtonStyled
      $size={size}
      $hoverState={hoverState}
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
      onMouseDown={() => setHoverState(false)}
      onMouseUp={() => setHoverState(true)}
      $border={border || primary}
      $primary={primary}
      $isDisabled={isDisabled}
      onClick={onClick}
      {...props}
    >
      <ButtonContent $size={size} $secondary={secondary}>
        {React.isValidElement(icon) && React.cloneElement(icon, iconProps)}
        {children && <TextButton size={size}>{children}</TextButton>}
      </ButtonContent>
    </ButtonStyled>
  );
};

const ButtonMedium = css`
  padding: 0px 16px;
  height: 36px;
`;

const ButtonSmall = css`
  padding: 0px 12px;
  height: 32px;
`;

const ButtonDisabled = css`
  opacity: 0.4;
  cursor: default;
  pointer-events: none;
`;

const ButtonEnabled = css<{ $hoverState: boolean }>`
  opacity: ${({ $hoverState }) => ($hoverState ? 0.9 : 1.0)};
  cursor: pointer;
`;

const ButtonStyled = styled.button<{
  $size: 'medium' | 'small';
  $isDisabled: boolean;
  $border: string;
  $primary: string;
  $hoverState: boolean;
}>`
  user-select: none;
  box-sizing: border-box;

  border: 1.5px solid ${({ $border }) => $border};
  background-color: ${({ $primary }) => $primary};
  transition: ${({ theme }) => theme.speed.normal};

  ${({ $size }) => ($size === 'medium' ? ButtonMedium : ButtonSmall)}
  ${({ $isDisabled }) => ($isDisabled ? ButtonDisabled : ButtonEnabled)}
`;

const ButtonContent = styled.div<{
  $size: 'medium' | 'small';
  $secondary: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  column-gap: ${({ $size }) => ($size === 'medium' ? 4 : 3)}px;

  & * {
    color: ${({ $secondary }) => $secondary};
    transition: ${({ theme }) => theme.speed.normal};
  }
`;
