import React from 'react';
import styled, { css } from 'styled-components';
import { Image } from '../Image/Image';
import { useState } from 'react';
import { Theme } from '../../../utility/themes/Theme';
import { ImageTitle } from '../ImageTitle';

export interface ImageThumbnailProps
  extends React.HTMLAttributes<HTMLDivElement> {
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
   * Image width
   */
  imageWidth?: number;
  /**
   * Image height
   */
  imageHeight?: number;
  /**
   * Maximum container size
   */
  containerSize?: number | string;
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
  imageWidth,
  imageHeight,
  containerSize = '100%',
  onClick: onClick,
  ...props
}): React.ReactElement => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Wrapper
      $imageWidth={imageWidth}
      $imageHeight={imageHeight}
      $containerSize={containerSize}
      {...props}
    >
      <Content
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <ImageStyled
          onLoad={() => setIsLoaded(true)}
          $isHovered={isHovered}
          $isLoaded={isLoaded}
          src={src}
          alt={title ? title : 'unnamed'}
        />
        {(title || subtitle) && (
          <ImageTitleStyled
            $isHovered={isTitleVisible ? true : isHovered}
            $isLoaded={isLoaded}
            title={title}
            subtitle={subtitle}
            color={Theme.color.background}
          />
        )}
        <Border />
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div<{
  $imageWidth?: number;
  $imageHeight?: number;
  $containerSize: number | string;
}>`
  width: ${({ $containerSize }) =>
    typeof $containerSize === 'number'
      ? `${$containerSize}px`
      : $containerSize};

  aspect-ratio: ${({ $imageWidth, $imageHeight }) =>
    $imageWidth && $imageHeight ? $imageWidth / $imageHeight : `auto`};
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  overflow: hidden;
  cursor: pointer;
`;

const ImageStyled = styled(Image)<{
  $isHovered: boolean;
  $isLoaded: boolean;
}>`
  width: 100%;
  min-height: 100%;

  object-fit: cover;
  user-select: none;
  pointer-events: none;
  transition: ${({ theme }) => `${theme.speed.slow}`};
  opacity: ${({ $isLoaded }) => ($isLoaded ? 1 : 0)};

  ${({ $isHovered }) =>
    $isHovered &&
    `
      -webkit-filter: brightness(80%) contrast(125%) saturate(0%);
      -moz-filter: brightness(80%) contrast(125%) saturate(0%);
      filter: brightness(80%) contrast(125%) saturate(0%);
      transform: scale(1.02);
    `};
`;

const ImageTitleStyled = styled(ImageTitle)<{
  $isHovered: boolean;
  $isLoaded: boolean;
}>`
  box-sizing: border-box;
  position: absolute;

  bottom: 0px;
  left: 0px;
  width: 100%;
  padding: 20px;
  padding-top: 60px;

  ${({ $isHovered, theme }) => `
    transition: ${theme.speed.slow};
    transition-delay: ${$isHovered ? 0 : 400}ms;
    opacity: ${$isHovered ? 1 : 0};
  `};

  ${({ $isLoaded }) => !$isLoaded && 'opacity: 0;'}

  background: none;
  background: ${({ theme }) => `${theme.color.greyBackdropUp}`};

  user-select: none;
  pointer-events: none;
`;

const Border = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;

  box-shadow: inset 0 0 0 0.8px ${({ theme }) => `${theme.color.outline}`};
`;
