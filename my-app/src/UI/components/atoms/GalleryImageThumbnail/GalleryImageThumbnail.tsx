import React from 'react';
import styled from 'styled-components';
import { Image, ImageProps } from '../Image/Image';
import { useState } from 'react';
import { ImageTitle } from '../ImageTitle';

export interface GalleryImageThumbnailProps extends ImageProps {
  onClick?: () => void;
}

export const GalleryImageThumbnail: React.FC<GalleryImageThumbnailProps> = ({
  onClick,
  ...props
}): React.ReactElement => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Wrapper onClick={onClick} $isLoaded={isLoaded} {...props}>
      <ImageStyled onLoad={() => setIsLoaded(true)} {...props} />
    </Wrapper>
  );
};

const ImageStyled = styled(Image)`
  width: 100%;
  height: 100%;

  object-fit: contain;
  user-select: none;
`;

const Wrapper = styled.div<{
  $isLoaded: boolean;
}>`
  width: 400px;
  height: 400px;
  cursor: pointer;

  transition: ${({ theme }) => theme.speed.slow}ms;
  opacity: ${({ $isLoaded }) => ($isLoaded ? 1 : 0)};
  box-shadow: 0 0 0 1px ${({ theme }) => `${theme.color.outline}`};
  &:hover {
    transform: scale(1.03);
  }
`;
