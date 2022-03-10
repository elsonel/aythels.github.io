import React from 'react';
import styled from "styled-components";

export type ParagraphProps = {
    children: string;  // text
    size?: string;  // font size
    weight?: string; // font weight
    textAlign?: string; // text alignment
    lineHeight?: string; // line height
    color?: string; // text color
}

export const Paragraph = ({
    children,
    size = 'default',
    weight = 'regular',
    textAlign = 'left',
    lineHeight = 'normal',
    color = 'text',
    ...props
  }: ParagraphProps) => {
    return (
      <Text size={size} weight={weight} textAlign={textAlign} lineHeight={lineHeight} color={color} {...props}>{children}</Text>
    );
  };

  const Text = styled.p<ParagraphProps>`
  ${({
    theme,
    color = 'text',
    size = 'default',
    weight = 'regular',
    textAlign = 'left',
    lineHeight= 'normal',
}): string => `
    font-family: ${theme.font.family};
    font-size: ${theme.font.size[size] || size};
    font-weight: ${theme.font.weight[weight] || weight};
    text-align: ${textAlign};
    line-height: ${lineHeight};
    color: ${theme.colors[color] || color};
    margin: 0px;
    transition: ${theme.speed.normal};
`}
`;