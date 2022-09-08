import { useLayoutEffect, useState } from 'react';

export default function useOnWindowResize(callback?: () => void) {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);

  useLayoutEffect(() => {
    function updateSize() {
      callback && callback();
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return size;
}
