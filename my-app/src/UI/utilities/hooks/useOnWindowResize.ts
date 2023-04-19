import { useLayoutEffect, useState } from 'react';

export default function useOnWindowResize(
  callback?: (newWidth: number, newHeight: number) => void
) {
  const [size, setSize] = useState([0, 0]);

  useLayoutEffect(() => {
    function updateSize() {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      callback && callback(newWidth, newHeight);
      setSize([newWidth, newHeight]);
    }
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [callback]);

  return size; // [width, height]
}
