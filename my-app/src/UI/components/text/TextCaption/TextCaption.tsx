import React from 'react';
import styled from 'styled-components';
import { Paragraph, ParagraphProps } from '../Paragraph/Paragraph';

export interface TextCaptionProps extends ParagraphProps {
  /**
   * Text to be used as caption
   */
  children?: React.ReactNode; // text
}

export const TextCaption: React.FC<TextCaptionProps> = ({
  children,
  ...props
}): React.ReactElement => {
  return (
    <Text {...props} size="small">
      {children}
    </Text>
  );
};

const Text = styled(Paragraph)`
  ${({ theme }) => `
    text-align:	center;
    color: ${theme.color.textNeutral};
    font-size: ${theme.font.size.small};
  `};
`;
