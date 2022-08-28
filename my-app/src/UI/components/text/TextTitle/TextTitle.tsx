import React from 'react';
import styled from 'styled-components';
import { Paragraph, ParagraphProps } from '../Paragraph/Paragraph';

export interface TextTitleProps extends ParagraphProps {
  /**
   * Text to be used as title
   */
  children?: React.ReactNode; // text
  /**
   * Text size
   */
  size?: 'small' | 'medium' | 'large';
}

export const TextTitle: React.FC<TextTitleProps> = ({
  children,
  size = 'medium',
  ...props
}): React.ReactElement => {
  return (
    <Text $size={size} {...props}>
      {children}
    </Text>
  );
};

const Text = styled(Paragraph)<{ $size: 'small' | 'medium' | 'large' }>`
  font-size: ${({ $size }) => {
    switch ($size) {
      case 'small':
        return '1.6rem';
      case 'medium':
        return '3.0rem';
      case 'large':
        return '4.0rem';
    }
  }};

  line-height: ${({ $size }) => {
    switch ($size) {
      case 'small':
        return '1.8rem';
      case 'medium':
        return '3.4rem';
      case 'large':
        return '4.2rem';
    }
  }};

  font-weight: ${({ theme }) => theme.font.weight.bold2};
`;
