import React from 'react';
import styled from "styled-components";
import { Paragraph } from '../../../text/Paragraph/Paragraph';

export interface FooterTextProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Text size
   */
  size?: string;
  /**
   * Text alignment
   */
  align?: string;
}

export const FooterText: React.FC<FooterTextProps> = ({
  size='small',
  align='left',
  ...props
}): React.ReactElement => { 
  return (
  <Wrapper $align={align} {...props}>
    <span>
      <TextCopyright $size={size}>© 2022</TextCopyright>
      <TextCopyright $size={size} weight={'bold2'}>&nbsp;&nbsp;ELSON LIANG</TextCopyright>
    </span>
    <Text $size={size}>Designed from scratch and built with React.</Text>
  </Wrapper>
)};

const Wrapper = styled.div<{$align: string}>`
  display: inline-flex;
  flex-direction: column;
  text-align: ${({$align}) => $align};
`;

const Text = styled(Paragraph)<{$size: string}>`
  display: inline;

  ${({theme, $size}) => `
    color: ${theme.colors.textPassive2};
    font-size: ${theme.font.size[$size] || $size};
  `}
`;

const TextCopyright = styled(Text)`
  display: inline-block;
`;