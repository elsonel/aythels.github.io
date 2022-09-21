import React from 'react';
import styled from 'styled-components';

export interface ImageProps extends React.HTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

// https://www.cronyxdigital.com/blog/the-ultimate-website-image-guide

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  ...props
}): React.ReactElement => {
  return <ImageStyled src={src} alt={alt} {...props} />;
};

const ImageStyled = styled.img`
  display: block;
  user-select: none;
  pointer-events: none;
`;
