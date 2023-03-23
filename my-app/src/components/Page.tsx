import React, { useEffect, useRef } from 'react';

import useOnImagesLoaded from '../UI/utility/hooks/useOnImagesLoaded';

const LOADING_TIMEOUT = 10000;

export interface PageProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  children?: React.ReactNode;
}

export const Page: React.FC<PageProps> = ({
  title,
  children,
  ...props
}): React.ReactElement => {
  const [isLoaded, ref, onImageLoad] = useOnImagesLoaded(
    500,
    (progress) => {} //LoaderManager.setProgress(progress)
  );

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.title = title ? `Elson Liang | ${title}` : `Elson Liang`;
  }, []);

  useEffect(() => {
    const timeout = setTimeout(
      //() => LoaderManager.finishLoad(),
      () => {},
      LOADING_TIMEOUT
    );
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    //if (isLoaded) LoaderManager.finishLoad();
  }, [isLoaded]);

  return (
    <div ref={ref} onLoad={onImageLoad} onError={onImageLoad} {...props}>
      {children}
    </div>
  );
};
