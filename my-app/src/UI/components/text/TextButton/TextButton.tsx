import React from 'react';
import styled from 'styled-components';
import { Paragraph, ParagraphProps } from '../Paragraph/Paragraph';

export interface TextButtonProps extends ParagraphProps {
  /**
   * Text
   */
  children: string;
}

export const TextButton: React.FC<TextButtonProps> = ({
  children,
  ...props
}): React.ReactElement => {
  return <Text {...props}>{children}</Text>;
};

const Text = styled(Paragraph)`
  font-weight: ${({ theme }) => theme.font.weight.regular};
  letter-spacing: ${({ theme }) => theme.font.spacing.button};
  white-space: nowrap;

  padding-left: ${({ theme }) => theme.font.spacing.button};
`;
