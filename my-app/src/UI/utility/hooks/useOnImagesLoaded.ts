import { useEffect, useRef, useState } from 'react';

const DELAY = 100;

export default function useOnImagesLoaded(): [
  boolean,
  React.RefObject<any>,
  () => void
] {
  const ref = useRef<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoadedDelay, setIsLoadedDelay] = useState(false);

  useEffect(() => {
    onImageLoad();
  }, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined;
    if (isLoaded) timeout = setTimeout(() => setIsLoadedDelay(true), DELAY);
    return () => clearTimeout(timeout);
  }, [isLoaded]);

  const onImageLoad = () => {
    const element = ref && ref.current ? ref.current : document;
    const allImages = element.getElementsByTagName('img');
    for (let i = 0; i < allImages.length; i++) {
      const image = allImages[i];
      if (!image.complete) return;
    }

    setIsLoaded(true);
  };

  return [isLoadedDelay, ref, onImageLoad];
}
