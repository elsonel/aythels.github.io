import React, { useState } from 'react';
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
  isIconOnRight?: boolean;
}

export const ButtonReverseText: React.FC<ButtonReverseTextProps> = ({
  children,
  iconSrc,
  colorText = 'white',
  colorTextHovered = 'black',
  size = 'medium',
  isIconOnRight = false,
  ...props
}): React.ReactElement => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ButtonReverse {...props}>
        <ButtonContent
          $colorText={isHovered ? colorTextHovered : colorText}
          text={children}
          iconSrc={iconSrc}
          size={size}
          isIconOnRight={isIconOnRight}
        />
      </ButtonReverse>
    </div>
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
}>`
  ${({ size }) => (size === 'medium' ? ButtonMedium : ButtonSmall)}

  > * {
    color: ${({ $colorText }) => $colorText};
  }
`;
