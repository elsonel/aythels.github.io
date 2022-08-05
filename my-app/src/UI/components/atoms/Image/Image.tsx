import React from 'react';
import styled from 'styled-components';

export interface ImageProps extends React.HTMLAttributes<HTMLImageElement> {
  src: string;
}

// https://www.cronyxdigital.com/blog/the-ultimate-website-image-guide

export const Image: React.FC<ImageProps> = ({
  src,
  ...props
}): React.ReactElement => {
  return (
    <ImageStyled
      /*onLoad={() => console.log("loaded")}*/
      src={src}
      alt="img"
      {...props}
    />
  );
};

const ImageStyled = styled.img`
  display: block;
  user-select: none;
  pointer-events: none;
`;
