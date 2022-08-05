import React from 'react';
import styled from 'styled-components';
import { Image } from '../Image/Image';
import { Paragraph } from '../../text/Paragraph/Paragraph';
import { Theme } from '../../../utility/Theme';
import { useState } from 'react';

export interface ImageThumbnailProps {
  /**
   * The image source
   */
  src: string;
  /**
   * The image title
   */
  title?: string;
  /**
   * The image subtitle
   */
  subtitle?: string;
  /**
   * If the title is always visible or only visible on hover
   */
  isTitleVisible?: boolean;
  /**
   * Action onclick
   */
  onClick?: () => void;
}

export const ImageThumbnail: React.FC<ImageThumbnailProps> = ({
  src,
  title,
  subtitle,
  isTitleVisible = false,
  onClick,
  ...props
}): React.ReactElement => {
  const [hovered, setHovered] = useState(false);

  return (
    <WrapperPadding {...props}>
      <Wrapper
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <ImageExtended $hovered={hovered} src={src} />
        <TextContainer $hovered={isTitleVisible ? true : hovered}>
          {subtitle && <TextSubtitle>{subtitle}</TextSubtitle>}
          {title && <TextTitle>{title}</TextTitle>}
        </TextContainer>
        <Border />
      </Wrapper>
    </WrapperPadding>
  );
};

const WrapperPadding = styled.div`
  width: 300px;
  height: 300px;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  overflow: hidden;
  cursor: pointer;
`;

const Border = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  box-shadow: inset 0 0 0 0.8px ${({ theme }) => `${theme.colors.textPassive2}`};
`;

const ImageExtended = styled(Image)<{ $hovered: boolean }>`
  width: 100%;

  display: block;
  user-select: none;
  pointer-events: none;

  transition: ${({ theme }) => `${theme.speed.slow}`};

  ${({ $hovered }) =>
    $hovered &&
    `
      -webkit-filter: brightness(80%) contrast(125%) saturate(0%);
      -moz-filter: brightness(80%) contrast(125%) saturate(0%);
      filter: brightness(80%) contrast(125%) saturate(0%);
      transform: scale(1.02);
    `};
`;

const TextContainer = styled.div<{ $hovered: boolean }>`
  position: absolute;
  bottom: 0px;
  left: 0px;
  padding: 16px;

  user-select: none;
  pointer-events: none;

  ${({ $hovered, theme }) => `
    transition: ${theme.speed.slow};
    transition-delay: ${$hovered ? 0 : 400}ms;
    opacity: ${$hovered ? 1 : 0};
  `};
`;

const TextSubtitle = styled(Paragraph)`
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.background};
  font-size: ${({ theme }) => theme.font.size.small};
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;

const TextTitle = styled(Paragraph)`
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.background};
  font-size: ${({ theme }) => theme.font.size.large};
  font-weight: ${({ theme }) => theme.font.weight.bold2};
`;
