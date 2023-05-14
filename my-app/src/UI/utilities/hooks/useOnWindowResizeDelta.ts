import { useCallback, useState } from 'react';
import useOnWindowResize from './useOnWindowResize';

export default function useOnWindowResizeDelta(
  callback?: (deltaX: number, deltaY: number) => void
) {
  const [oldX, setOldX] = useState(window.innerWidth);
  const [oldY, setOldY] = useState(window.innerHeight);
  const [deltaX, setDeltaX] = useState(0);
  const [deltaY, setDeltaY] = useState(0);

  const onResize = useCallback(() => {
    const newX = window.innerWidth;
    const newY = window.innerHeight;
    const deltaX = oldX - newX;
    const deltaY = oldY - newY;

    if (deltaX === 0 && deltaY === 0) return;

    callback && callback(deltaX, deltaY);
    setDeltaX(deltaX);
    setDeltaY(deltaY);
    setOldX(newX);
    setOldY(newY);
  }, [callback, oldX, oldY]);

  useOnWindowResize(onResize);

  return [deltaX, deltaY];
}
