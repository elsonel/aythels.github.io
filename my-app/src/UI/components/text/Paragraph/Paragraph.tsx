import React from 'react';
import styled, { css, useTheme } from 'styled-components';
import { ThemeInterface } from '../../../utility/themes/Theme';
import { FontInterface } from '../../../utility/themes/ThemeFont';

const getTextElementBySize = (size: keyof FontInterface['size']) => {
  switch (size) {
    case 'tiny':
      return P;
    case 'small':
      return P;
    case 'default':
      return P;
    case 'large':
      return P;
    case 'h6':
      return H6;
    case 'h5':
      return H5;
    case 'h4':
      return H4;
    case 'h3':
      return H3;
    case 'h2':
      return H2;
    case 'h1':
      return H1;
    default:
      return P;
  }
};

export interface IParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement | HTMLHeadingElement> {
  /* Text string or nested component */
  children?: React.ReactNode;
  /* The font theme object to use */
  font?: FontInterface;
  /* Font size */
  size?: keyof FontInterface['size'];
  /* Font weight */
  weight?: keyof FontInterface['weight'];
  /* Text alignment */
  textAlign?: 'center' | 'left' | 'right' | 'justify';
  /* Text color */
  color?: string;
  /* Whether this text wraps or not when overflowing */
  isWrapped?: boolean;
}

export const Paragraph: React.FC<IParagraphProps> = ({
  children = '',
  font,
  size = 'default',
  weight = 'regular',
  textAlign = 'left',
  color = 'black',
  isWrapped = true,
  ...props
}: IParagraphProps) => {
  const defaultFont = (useTheme() as ThemeInterface).font.default;

  return React.createElement(getTextElementBySize(size), {
    children: children,
    $font: font ?? defaultFont,
    $size: size,
    $weight: weight,
    $textAlign: textAlign,
    $color: color,
    $isWrapped: isWrapped,
    ...props,
  });
};

interface TextStyleInterface {
  $font: FontInterface;
  $size: keyof FontInterface['size'];
  $weight: keyof FontInterface['weight'];
  $textAlign: 'center' | 'left' | 'right' | 'justify';
  $color: string;
  $isWrapped: boolean;
}

const TextStyle = css<TextStyleInterface>`
  ${({ theme, $font, $size, $weight, $textAlign, $color }) => `
    font-size: ${$font.size[$size]};
    font-weight: ${$font.weight[$weight]};
    text-align: ${$textAlign};
    color: ${$color};

    font-family: ${$font.family};
    line-height: ${$font.lineHeight.default};
    word-spacing: ${$font.wordSpacing.default};
    transition: ${theme.speed.normal}ms;
  `}

  ${({ $isWrapped }) =>
    !$isWrapped &&
    `
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `}

  overflow-wrap: anywhere;
  margin: 0px;
`;

const P = styled.p`
  ${TextStyle}
`;

const H1 = styled.h1`
  ${TextStyle}
`;

const H2 = styled.h2`
  ${TextStyle}
`;

const H3 = styled.h3`
  ${TextStyle}
`;

const H4 = styled.h4`
  ${TextStyle}
`;

const H5 = styled.h5`
  ${TextStyle}
`;

const H6 = styled.h6`
  ${TextStyle}
`;
