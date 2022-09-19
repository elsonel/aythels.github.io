import React from 'react';
import styled, { css } from 'styled-components';
import { IconSVGType } from '../../../utility/themes/ThemeAsset';
import { ButtonProps } from '../Button';
import { ButtonReverse } from '../ButtonReverse';
import { RowIconTextButton } from '../../atoms/RowIconTextButton';

export interface ButtonReverseTextProps extends ButtonProps {
  children?: string;
  iconSrc?: IconSVGType;
  colorText?: string;
  colorTextHovered?: string;
  size?: 'medium' | 'small';
}

export const ButtonReverseText: React.FC<ButtonReverseTextProps> = ({
  children,
  iconSrc,
  colorText = 'white',
  colorTextHovered,
  size = 'medium',
  ...props
}): React.ReactElement => {
  return (
    <ButtonReverse {...props}>
      <ButtonContent
        $colorText={colorText}
        $colorTextHovered={colorTextHovered ? colorTextHovered : colorText}
        text={children}
        iconSrc={iconSrc}
        size={size}
      />
    </ButtonReverse>
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
