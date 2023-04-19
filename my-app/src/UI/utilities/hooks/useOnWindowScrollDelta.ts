import { useEffect, useRef } from 'react';

export default function useOnWindowScrollDelta(
  callback: (deltaY: number) => void
) {
  const currentScrollY = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      callback && callback(window.pageYOffset - currentScrollY.current);
      currentScrollY.current = window.pageYOffset;
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [callback]);
}
