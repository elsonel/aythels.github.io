import React from 'react';
import styled from 'styled-components';

export interface ImageProps extends React.HTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  srcSet?: string;
  sizes?: string;
}

// https://www.cronyxdigital.com/blog/the-ultimate-website-image-guide

export const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ src, alt, srcSet, sizes, ...props }, ref) => (
    <ImageStyled
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      ref={ref}
      {...props}
    />
  )
);

const ImageStyled = styled.img`
  display: block;
  user-select: none;
  pointer-events: none;
`;
