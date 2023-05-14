import { useCallback, useState } from 'react';
import useOnWindowResize from './useOnWindowResize';

export default function useOnWindowResizeSize(
  callback?: (newWidth: number, newHeight: number) => void
) {
  const [size, setSize] = useState([0, 0]);

  const onResize = useCallback(() => {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;
    callback && callback(newWidth, newHeight);
    setSize([newWidth, newHeight]);
  }, [callback]);

  useOnWindowResize(onResize);
  return size; // [width, height]
}
