import React from 'react';
import styled from 'styled-components';
import { Paragraph, ParagraphProps } from '../Paragraph/Paragraph';

export interface TextLinkProps extends ParagraphProps {
  /**
   * Text to be used as caption
   */
  children?: React.ReactNode;
}

export const TextLink: React.FC<TextLinkProps> = ({
  children,
  ...props
}): React.ReactElement => {
  return <Text {...props}>{children}</Text>;
};

const Text = styled(Paragraph)`
  cursor: pointer;
  color: ${({ theme }) => theme.color.textNeutral};
  text-decoration: underline;

  &:hover {
    color: ${({ theme }) => theme.color.textHovered};
  }

  transition: ${({ theme }) => theme.speed.normal};
`;
