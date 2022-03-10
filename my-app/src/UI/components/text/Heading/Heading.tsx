import React from 'react';
import styled from "styled-components";
import { Paragraph, ParagraphProps } from '../Paragraph/Paragraph';

export interface HeadingProps extends ParagraphProps {
  /**
   * Text to be used as heading
   */
  children: string;
}

export const Heading: React.FC<HeadingProps> = ({
  children,
  ...props
}): React.ReactElement => { 
  return (
    <Text {...props}>{children}</Text>
)};

const Text = styled(Paragraph)`
  font-size: ${({theme}) => theme.font.size.h4};
  font-weight: ${({theme}) => theme.font.weight.bold1};
`;