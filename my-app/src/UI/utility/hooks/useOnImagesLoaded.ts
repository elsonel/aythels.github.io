import { useEffect, useRef, useState } from 'react';

const DEFAULT_DELAY = 100;

// Does Lazy Loading mess with image.complete?
export default function useOnImagesLoaded(
  delay: number = DEFAULT_DELAY,
  callback?: (progress: number) => void
): [boolean, React.RefObject<any>, () => void] {
  const ref = useRef<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoadedDelay, setIsLoadedDelay] = useState(false);

  useEffect(() => {
    onImageLoad();
  }, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined;
    if (isLoaded) timeout = setTimeout(() => setIsLoadedDelay(true), delay);
    return () => clearTimeout(timeout);
  }, [isLoaded]);

  const onImageLoad = () => {
    const element = ref && ref.current ? ref.current : document;
    const allImages = element.getElementsByTagName('img');

    let loadedCount = 0;
    for (let i = 0; i < allImages.length; i++) {
      const image = allImages[i];
      if (image.complete) {
        loadedCount++;
      } else if (!image.complete) {
        callback && callback(loadedCount / allImages.length);
        return;
      }
    }

    setIsLoaded(true);
  };

  return [isLoadedDelay, ref, onImageLoad];
}
