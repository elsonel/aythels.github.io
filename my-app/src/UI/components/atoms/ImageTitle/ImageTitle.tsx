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
}

export const ImageTitle: React.FC<ImageTitleProps> = ({
  title,
  subtitle,
  color = Theme.color.text,
  ...props
}): React.ReactElement => {
  return (
    <Wrapper {...props}>
      <TextTitle isWrapped={false} color={color}>
        {title}
      </TextTitle>
      <TextSubtitle isWrapped={false} color={color}>
        {subtitle}
      </TextSubtitle>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;
  height: 90px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  user-select: none;
  pointer-events: none;
`;

const TextSubtitle = styled(Paragraph)`
  font-size: ${({ theme }) => theme.font.size.default};
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;

const TextTitle = styled(Paragraph)`
  font-size: ${({ theme }) => theme.font.size.h6};
  font-weight: ${({ theme }) => theme.font.weight.bold2};
`;
