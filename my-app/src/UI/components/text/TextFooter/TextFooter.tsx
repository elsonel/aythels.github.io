import React from 'react';
import styled from 'styled-components';
import { Paragraph, IParagraphProps } from '../Paragraph/Paragraph';

export interface TextFooterProps extends IParagraphProps {
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
    color: ${theme.color.textNeutral};

    font-size: ${theme.font.default.size.tiny};
  `};
`;
