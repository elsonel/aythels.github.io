import { useEffect, useRef } from 'react';

export default function useOnWindowScroll(callback: (scrollY: number) => void) {
  useEffect(() => {
    const handleScroll = () => {
      // Max() prevents negative scrolling on mobile
      callback && callback(Math.max(0, window.pageYOffset));
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [callback]);
}
