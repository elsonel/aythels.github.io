import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { IconSVGType } from '../../../utilities/themes/ThemeAsset';
import { ButtonProps } from '../Button';
import { ButtonReverse } from '../ButtonReverse';
import { RowIconTextButton } from '../../atoms/RowIconTextButton';

export interface ButtonReverseTextProps extends ButtonProps {
  children?: string;
  iconSrc?: IconSVGType;
  colorText?: string;
  colorTextHovered?: string;
  size?: 'default' | 'small';
  isIconOnRight?: boolean;
  onMouseLeave?: () => void;
  onMouseEnter?: () => void;
}

export const ButtonReverseText: React.FC<ButtonReverseTextProps> = ({
  children,
  iconSrc,
  colorText = 'white',
  colorTextHovered = 'black',
  size = 'default',
  isIconOnRight = false,
  onMouseLeave,
  onMouseEnter,
  ...props
}): React.ReactElement => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ButtonReverse {...props}>
      <ButtonContent
        onMouseEnter={() => {
          setIsHovered(true);
          onMouseEnter && onMouseEnter();
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          onMouseLeave && onMouseLeave();
        }}
        $colorText={isHovered ? colorTextHovered : colorText}
        text={children}
        iconSrc={iconSrc}
        size={size}
        isIconOnRight={isIconOnRight}
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
  size: 'default' | 'small';
  $colorText: string;
}>`
  ${({ size }) => (size === 'default' ? ButtonMedium : ButtonSmall)}

  > * {
    color: ${({ $colorText }) => $colorText};
  }
`;
