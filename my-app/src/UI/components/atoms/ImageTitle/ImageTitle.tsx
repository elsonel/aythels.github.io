import React from 'react';
import styled, { useTheme } from 'styled-components';
import { ThemeInterface } from 'UI/utility/themes/Theme';
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
  color,
  size = 'small',
  ...props
}): React.ReactElement => {
  const theme = useTheme() as ThemeInterface;
  if (!color) color = theme.color.background;

  return (
    <Wrapper>
      <Container {...props}>
        <Background />
        <TextWrapper>
          <TextTitle
            $size={size}
            isWrapped={false}
            color={color}
            textAlign="center"
          >
            {title}
          </TextTitle>
          <TextSubtitle
            $size={size}
            isWrapped={false}
            color={color}
            textAlign="center"
          >
            {subtitle}
          </TextSubtitle>
        </TextWrapper>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  user-select: none;
`;

const Background = styled.div`
  z-index: 0;
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 160px;

  background: transparent;
  background: ${({ theme }) => `${theme.color.greyBackdropUp}`};
`;

const TextWrapper = styled.div`
  z-index: 1;
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
`;

const TextSubtitle = styled(Paragraph)<{ $size: 'medium' | 'small' }>`
  font-size: ${({ $size, theme }) =>
    $size === 'medium'
      ? theme.font.default.size.large
      : theme.font.default.size.small};
  font-weight: ${({ theme }) => theme.font.default.weight.medium};
`;

const TextTitle = styled(Paragraph)<{ $size: 'medium' | 'small' }>`
  font-size: ${({ $size, theme }) =>
    $size === 'medium'
      ? theme.font.default.size.h4
      : theme.font.default.size.large};
  font-weight: ${({ theme }) => theme.font.default.weight.bold};
`;
