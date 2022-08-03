import React from 'react';
import styled from 'styled-components';
import { Paragraph, ParagraphProps } from '../Paragraph/Paragraph';

export interface TextCaptionProps extends ParagraphProps {
  /**
   * Text to be used as caption
   */
  children: string;
}

export const TextCaption: React.FC<TextCaptionProps> = ({
  children,
  ...props
}): React.ReactElement => {
  return <Text {...props}>{children}</Text>;
};

const Text = styled(Paragraph)`
  ${({ theme }) => `
    text-align:	center;
    color: ${theme.colors.textPassive2};

    font-size: ${theme.font.size.small};
  `};
`;
