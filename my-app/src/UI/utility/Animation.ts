import { useEffect, useRef } from 'react';

export const useAnimationFrame = (
  callback: (deltaTime: number) => void,
  fps?: number
) => {
  // https://css-tricks.com/using-requestanimationframe-with-react-hooks/

  const requestRef = useRef(0);
  const previousTimeRef = useRef(-1);

  const animate = (time: number) => {
    if (previousTimeRef.current > 0) {
      const deltaTime = time - previousTimeRef.current;
      callback(deltaTime); //increments by approximately 1 every second
    }

    previousTimeRef.current = time;

    if (fps)
      setTimeout(
        () => (requestRef.current = requestAnimationFrame(animate)),
        1000 / fps
      );
    else requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);
};
