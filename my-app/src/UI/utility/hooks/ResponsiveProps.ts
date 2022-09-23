import { useEffect, useState } from 'react';

function getMediaQueryInUse(query: string) {
  return window.matchMedia(query).matches;
}

export const useMediaQuery = (query: string) => {
  // From https://fireship.io/snippets/use-media-query-hook/

  const [isMatching, setIsMatching] = useState(getMediaQueryInUse(query));

  useEffect(() => {
    const listener = () => {
      setIsMatching(getMediaQueryInUse(query));
    };

    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, []);

  return isMatching;
};

export const LessThanHook = (pixels: number): boolean => {
  // Excluding upper bound
  return useMediaQuery(`(max-width: ${pixels}px)`);
};

export const GreaterThanHook = (pixels: number): boolean => {
  // Including lower bound
  return useMediaQuery(`(min-width: ${pixels}px)`);
};
