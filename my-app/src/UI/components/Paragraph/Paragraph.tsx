
/*
import React from 'react';
import styled from "styled-components";

export type ParagraphProps = {
    value: string;  // text
    color?: string; // text color
    size?: string;  // font size
}

export const Paragraph = ({
    value,
    color = 'text',
    size = 'default',
    ...props
  }: ParagraphProps) => {
    return (
      <Text color={color} size={size} {...props}>{value}</Text>
    );
  };

  const Text = styled.p<ParagraphProps>`
    // Base Styles
    ${({
        theme,
        color = 'text',
        size = 'default',
    }): string => `
        color: ${theme.colors[color] || color};
        font-size: ${theme.font.size[size] || size};
    `}
`;
*/

export const b = 21;