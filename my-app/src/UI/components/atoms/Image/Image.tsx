import React from 'react';
import styled from 'styled-components';

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

// https://www.cronyxdigital.com/blog/the-ultimate-website-image-guide

export const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ src, alt, ...props }, ref) => (
    <ImageStyled src={src} alt={alt} ref={ref} {...props} />
  )
);

const ImageStyled = styled.img`
  display: block;
  user-select: none;
  pointer-events: none;
`;
