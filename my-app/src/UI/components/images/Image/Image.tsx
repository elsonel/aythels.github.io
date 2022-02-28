import React from 'react';

export interface ImageProps extends React.HTMLAttributes<HTMLDivElement>{
  src: string;
}

export const Image = ({
    src,
    ...props
  }: ImageProps) => {
    return (
      <img /*onLoad={() => console.log("loaded")}*/ src={src} alt="img" {...props}/>
    );
  };

// https://www.javascriptstuff.com/react-image-gallery/