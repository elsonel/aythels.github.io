import { useEffect, useState } from 'react';

export const useMediaQuery = (query: string) => {
  // From https://fireship.io/snippets/use-media-query-hook/

  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [matches, query]);

  return matches;
};

export const LessThanHook = (pixels: number): boolean => {
  // Excluding upper bound
  return useMediaQuery(`(max-width: ${pixels}px)`);
};

export const GreaterThanHook = (pixels: number): boolean => {
  // Including lower bound
  return useMediaQuery(`(min-width: ${pixels}px)`);
};
