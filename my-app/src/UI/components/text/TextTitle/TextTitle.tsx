import React from 'react';
import styled from 'styled-components';
import { Paragraph, IParagraphProps } from '../Paragraph/Paragraph';

export interface TextTitleProps extends IParagraphProps {
  /**
   * Text to be used as title
   */
  children?: React.ReactNode; // text
  /**
   * Text size
   */
  size?: 'small' | 'default' | 'large';
}

export const TextTitle: React.FC<TextTitleProps> = ({
  children,
  size = 'default',
  ...props
}): React.ReactElement => {
  return (
    <Text $size={size} weight="bold" {...props}>
      {children}
    </Text>
  );
};

const Text = styled(Paragraph)<{ $size: 'small' | 'default' | 'large' }>`
  line-height: 1;
  font-size: ${({ $size }) => {
    switch ($size) {
      case 'small':
        return '1.6rem';
      case 'default':
        return '3.0rem';
      case 'large':
        return '4.0rem';
    }
  }};
`;
