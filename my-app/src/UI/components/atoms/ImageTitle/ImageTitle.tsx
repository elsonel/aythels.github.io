import React from 'react';
import styled from 'styled-components';
import { Theme } from '../../../utility/themes/Theme';
import { Paragraph } from '../../text/Paragraph';

export interface ImageTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The image title
   */
  title?: string;
  /**
   * The image subtitle
   */
  subtitle?: string;
  /**
   * Text color
   */
  color?: string;
  /**
   * Text size
   */
  size?: 'medium' | 'small';
}

export const ImageTitle: React.FC<ImageTitleProps> = ({
  title,
  subtitle,
  color = Theme.color.text,
  size = 'small',
  ...props
}): React.ReactElement => {
  return (
    <Wrapper {...props}>
      <Content $size={size}>
        <TextTitle $size={size} isWrapped={false} color={color}>
          {title}
        </TextTitle>
        <TextSubtitle $size={size} isWrapped={false} color={color}>
          {subtitle}
        </TextSubtitle>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Content = styled.div<{ $size: 'medium' | 'small' }>`
  width: 100%;
  height: ${({ $size }) => ($size === 'medium' ? 54 : 40)}px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TextSubtitle = styled(Paragraph)<{ $size: 'medium' | 'small' }>`
  font-size: ${({ $size, theme }) =>
    $size === 'medium' ? theme.font.size.large : theme.font.size.small};
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;

const TextTitle = styled(Paragraph)<{ $size: 'medium' | 'small' }>`
  font-size: ${({ $size, theme }) =>
    $size === 'medium' ? theme.font.size.h4 : theme.font.size.large};
  font-weight: ${({ theme }) => theme.font.weight.bold2};
`;
