import { useEffect, useState } from 'react';

export default function useOnWindowScrollDelta(callback?: (n: number) => void) {
  const [pageOffset, setPageOffset] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      callback && callback(window.pageYOffset);
      setPageOffset(window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return pageOffset;
}
