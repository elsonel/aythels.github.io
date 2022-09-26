import React from 'react';
import styled, { css } from 'styled-components';
import { Image, ImageProps } from '../Image/Image';
import { useState } from 'react';
import { Theme } from '../../../utility/themes/Theme';
import { ImageTitle } from '../ImageTitle';

export interface ImageThumbnailProps extends ImageProps {
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
  isTextAlwaysVisible?: boolean;
  /**
   * isFilingContainer
   */
  isFillingParent?: boolean;
  /**
   * Action onclick
   */
  onClick?: () => void;
}

export const ImageThumbnail: React.FC<ImageThumbnailProps> = ({
  title,
  subtitle,
  isTextAlwaysVisible,
  isFillingParent = true,
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
          $isHovered={isHovered}
          $isLoaded={isLoaded}
          {...props}
        />
        <TitlePanel
          $isHovered={isTextAlwaysVisible ? true : isHovered}
          $isLoaded={(!!title || !!subtitle) && isLoaded}
          title={title}
          subtitle={subtitle}
          color={Theme.color.background}
        />
        <Border />
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ $isFillingParent: boolean }>`
  width: ${({ $isFillingParent }) => ($isFillingParent ? '100%' : '300px')};
`;

const Content = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
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

const TitlePanel = styled(ImageTitle)<{
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

  ${({ $isHovered, $isLoaded, theme }) => `
    transition: ${theme.speed.slow};
    transition-delay: ${$isHovered ? 0 : 400}ms;
    opacity: ${$isHovered && $isLoaded ? 1 : 0};
  `};

  user-select: none;
  pointer-events: none;
  background: none;
  background: ${({ theme }) => `${theme.color.greyBackdropUp}`};
`;

const Border = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;

  box-shadow: inset 0 0 0 0.8px ${({ theme }) => `${theme.color.outline}`};
`;
