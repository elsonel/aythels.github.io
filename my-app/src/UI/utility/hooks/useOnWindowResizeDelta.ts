import { useLayoutEffect, useState } from 'react';

export default function useOnWindowResizeDelta(
  callback?: (n: number[]) => void
) {
  const [oldX, setOldX] = useState(window.innerWidth);
  const [oldY, setOldY] = useState(window.innerHeight);
  const [deltaX, setDeltaX] = useState(0);
  const [deltaY, setDeltaY] = useState(0);

  useLayoutEffect(() => {
    // negative delta means expanding, positive means shrinking

    function updateSize() {
      const newX = window.innerWidth;
      const newY = window.innerHeight;
      const deltaX = oldX - newX;
      const deltaY = oldY - newY;

      if (deltaX === 0 && deltaY === 0) return;

      callback && callback([deltaX, deltaY]);
      setDeltaX(deltaX);
      setDeltaY(deltaY);
      setOldX(newX);
      setOldY(newY);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, [deltaX, deltaY]);

  return [deltaX, deltaY];
}
