import { useEffect, useRef } from 'react';

export default function useOnWindowScroll(callback: (scrollY: number) => void) {
  useEffect(() => {
    const handleScroll = () => {
      callback && callback(window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [callback]);
}
