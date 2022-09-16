import React, { useEffect, useRef } from 'react';
import { finishLoad } from '../Loader';

const LOADING_TIMEOUT = 20000;

export interface PageProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const Page: React.FC<PageProps> = ({
  children,
  ...props
}): React.ReactElement => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeout = setTimeout(() => finishLoad(), LOADING_TIMEOUT);
    onImageLoad();
    return () => clearTimeout(timeout);
  }, []);

  const onImageLoad = () => {
    const allImages = ref.current!.getElementsByTagName('img');
    for (let i = 0; i < allImages.length; i++) {
      const image = allImages[i];
      if (!image.complete) return;
    }

    finishLoad();
  };

  return (
    <div ref={ref} onLoad={onImageLoad} onError={onImageLoad} {...props}>
      {children}
    </div>
  );
};
