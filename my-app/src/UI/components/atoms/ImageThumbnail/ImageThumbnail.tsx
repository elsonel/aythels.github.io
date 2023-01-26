import React from 'react';
import styled from 'styled-components';
import { Image, ImageProps } from '../Image/Image';
import { useState } from 'react';
import { ImageTitle } from '../ImageTitle';

export interface ImageThumbnailProps extends ImageProps {
  /*
   * Overlaid element
   */
  overlayElement?: React.ReactNode;
  /*
   * isFilingContainer
   */
  isFillingParent?: boolean;
  /*
   * If overlaid element container is always visible
   */
  isOverlayVisible?: boolean;
  /*
   * Hover override
   */
  isBackHovered?: boolean;
  /*
   * Action onclick
   */
  onClick?: () => void;
}

export const ImageThumbnail: React.FC<ImageThumbnailProps> = ({
  overlayElement,
  isFillingParent = true,
  isOverlayVisible,
  isBackHovered,
  onClick,
  ...props
}): React.ReactElement => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Wrapper
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      $isFillingParent={isFillingParent}
      {...props}
    >
      <Content>
        <ImageStyled
          onLoad={() => setIsLoaded(true)}
          $isHovered={isBackHovered == null ? isHovered : isBackHovered}
          $isLoaded={isLoaded}
          {...props}
        />
        <Background
          $isHovered={isBackHovered == null ? isHovered : isBackHovered}
          $isLoaded={isLoaded}
        />
        <Overlay
          $isOverlayVisible={
            isOverlayVisible == null ? isHovered : isOverlayVisible
          }
          $isLoaded={isLoaded}
          children={overlayElement}
        />
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ $isFillingParent: boolean }>`
  width: ${({ $isFillingParent }) => ($isFillingParent ? '100%' : '320px')};
  cursor: pointer;
`;

const Content = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
`;

// Have to use min-height instead of height because of rendering bug
const ImageStyled = styled(Image)<{
  $isHovered: boolean;
  $isLoaded: boolean;
}>`
  width: 100%;
  min-height: 100%;

  object-fit: cover;
  user-select: none;
  pointer-events: none;
  transition: ${({ theme }) => theme.speed.slow}ms;
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

const Background = styled.div<{ $isHovered: boolean; $isLoaded: boolean }>`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;

  box-shadow: inset 0 0 0 0.8px ${({ theme }) => `${theme.color.outline}`};
  transition: ${({ theme }) => theme.speed.slow}ms;
  ${({ $isHovered, $isLoaded }) =>
    $isHovered && $isLoaded && `background-color: rgba(0, 0, 0, 0.1);`};
`;

const Overlay = styled.div<{ $isOverlayVisible: boolean; $isLoaded: boolean }>`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;

  ${({ $isOverlayVisible, $isLoaded, theme }) => `
    transition: ${theme.speed.slow}ms;
    transition-delay: ${$isOverlayVisible ? 0 : 400}ms;
    opacity: ${$isOverlayVisible && $isLoaded ? 1 : 0};
  `};
`;
