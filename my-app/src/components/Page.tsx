import React, { useEffect, useRef } from 'react';
import { LoaderManager } from '../Loader';

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
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.title = title ? `Elson Liang | ${title}` : `Elson Liang`;
  }, []);

  useEffect(() => {
    onImageLoad();
  }, []);

  useEffect(() => {
    const timeout = setTimeout(
      () => LoaderManager.finishLoad(),
      LOADING_TIMEOUT
    );
    return () => clearTimeout(timeout);
  }, []);

  const onImageLoad = () => {
    const allImages = ref.current!.getElementsByTagName('img');
    let loadedCount = 0;
    for (let i = 0; i < allImages.length; i++) {
      const image = allImages[i];
      if (image.complete) {
        loadedCount++;
      } else if (!image.complete) {
        LoaderManager.setProgress(loadedCount / allImages.length);
        return;
      }
    }

    LoaderManager.finishLoad();
  };

  return (
    <div ref={ref} onLoad={onImageLoad} onError={onImageLoad} {...props}>
      {children}
    </div>
  );
};
