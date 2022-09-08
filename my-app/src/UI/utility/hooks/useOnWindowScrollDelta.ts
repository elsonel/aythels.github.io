import { useEffect, useState } from 'react';

export default function useOnWindowScrollDelta(callback?: (n: number) => void) {
  const [oldValue, setOldValue] = useState(window.pageYOffset);
  const [delta, setDelta] = useState(0);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      const newValue = window.pageYOffset;
      const delta = oldValue - newValue;

      if (delta === 0) return;

      callback && callback(delta);
      setDelta(delta);
      setOldValue(newValue);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [oldValue]);

  return delta;
}
