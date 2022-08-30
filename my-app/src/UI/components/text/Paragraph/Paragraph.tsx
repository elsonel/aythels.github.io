import React from 'react';
import styled, { css } from 'styled-components';

export interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  children?: React.ReactNode; // text
  size?: string; // font size
  weight?: string; // font weight
  textAlign?: string; // text alignment
  lineHeight?: string; // line height
  color?: string; // text color
  isWrapped?: boolean; // text wrapping
}

export const Paragraph: React.FC<ParagraphProps> = ({
  children = '',
  size = 'default',
  weight = 'regular',
  textAlign = 'left',
  lineHeight = 'normal',
  color = 'text',
  isWrapped = true,
  ...props
}: ParagraphProps) => {
  return (
    <Text
      $size={size}
      $weight={weight}
      $textAlign={textAlign}
      $lineHeight={lineHeight}
      $color={color}
      $isWrapped={isWrapped}
      {...props}
    >
      {children}
    </Text>
  );
};

const TextLine = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Text = styled.p<{
  $size: string;
  $weight: string;
  $textAlign: string;
  $lineHeight: string;
  $color: string;
  $isWrapped: boolean;
}>`
  ${({ theme, $size, $weight, $textAlign, $lineHeight, $color }) => `
    font-family: ${theme.font.family};
    font-size: ${theme.font.size[$size] || $size};
    font-weight: ${theme.font.weight[$weight] || $weight};
    text-align: ${$textAlign};
    line-height: ${$lineHeight};
    color: ${theme.color[$color] || $color};
    transition: ${theme.speed.normal};
    word-spacing: ${theme.font.wordSpacing.default};
`}

  ${({ $isWrapped }) => !$isWrapped && TextLine}

  overflow-wrap: anywhere;
  margin: 0px;
`;
