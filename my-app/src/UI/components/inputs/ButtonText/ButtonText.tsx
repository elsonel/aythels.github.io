import React from 'react';
import styled, { css } from 'styled-components';
import { IconSVGType } from '../../../utility/themes/ThemeAsset';
import { Button, ButtonProps } from '../Button';
import { RowIconTextButton } from '../../atoms/RowIconTextButton';

export interface ButtonTextProps extends ButtonProps {
  children?: string;
  iconSrc?: IconSVGType;
  colorText?: string;
  colorTextHovered?: string;
  size?: 'medium' | 'small';
  isIconOnRight?: boolean;
}

export const ButtonText: React.FC<ButtonTextProps> = ({
  children,
  iconSrc,
  colorText = 'white',
  colorTextHovered,
  size = 'medium',
  isIconOnRight = false,
  ...props
}): React.ReactElement => {
  return (
    <Button {...props}>
      <ButtonContent
        $colorText={colorText}
        $colorTextHovered={colorTextHovered ? colorTextHovered : colorText}
        text={children}
        iconSrc={iconSrc}
        size={size}
        isIconOnRight={isIconOnRight}
      />
    </Button>
  );
};

const ButtonMedium = css`
  box-sizing: border-box;
  padding: 0px 16px;
  height: 36px;
`;

const ButtonSmall = css`
  box-sizing: border-box;
  padding: 0px 12px;
  height: 32px;
`;

const ButtonContent = styled(RowIconTextButton)<{
  size: 'medium' | 'small';
  $colorText: string;
  $colorTextHovered: string;
}>`
  ${({ size }) => (size === 'medium' ? ButtonMedium : ButtonSmall)}

  > * {
    color: ${({ $colorText }) => $colorText};
  }

  &:hover {
    > * {
      color: ${({ $colorTextHovered }) => $colorTextHovered};
    }
  }
`;
