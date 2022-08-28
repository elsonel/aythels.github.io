import React from 'react';
import styled from 'styled-components';
import { Paragraph, ParagraphProps } from '../Paragraph/Paragraph';

export interface TextFooterProps extends ParagraphProps {
  /**
   * Text to be used as caption
   */
  children?: React.ReactNode; // text
}

export const TextFooter: React.FC<TextFooterProps> = ({
  children,
  ...props
}): React.ReactElement => {
  return <Text {...props}>{children}</Text>;
};

const Text = styled(Paragraph)`
  ${({ theme }) => `
    text-align:	center;
    color: ${theme.colors.textPassive2};

    font-size: ${theme.font.size.tiny};
  `};
`;
