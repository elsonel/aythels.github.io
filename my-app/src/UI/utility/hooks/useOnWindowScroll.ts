import { useEffect, useState } from 'react';

export default function useOnWindowScroll(callback: (n: number) => void) {
  useEffect(() => {
    const handleScroll = (e: Event) => {
      callback && callback(window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [callback]);
}
