import React from 'react';
import styled from 'styled-components';
import { Paragraph, IParagraphProps } from '../Paragraph/Paragraph';

export interface TextCaptionProps extends IParagraphProps {
  /**
   * Text to be used as caption
   */
  children?: React.ReactNode;
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
    font-size: ${theme.font.default.size.small};
  `};
`;
