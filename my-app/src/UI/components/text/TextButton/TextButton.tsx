import React from 'react';
import styled from 'styled-components';
import { Paragraph, IParagraphProps } from '../Paragraph/Paragraph';

export interface TextButtonProps extends IParagraphProps {
  /**
   * Text
   */
  children?: React.ReactNode; // text
}

export const TextButton: React.FC<TextButtonProps> = ({
  children,
  ...props
}): React.ReactElement => {
  return (
    <Text isWrapped={false} weight="regular" {...props}>
      {children}
    </Text>
  );
};

const Text = styled(Paragraph)`
  letter-spacing: ${({ theme }) => theme.font.default.letterSpacing.button};
  padding-left: ${({ theme }) => theme.font.default.letterSpacing.button};
`;
