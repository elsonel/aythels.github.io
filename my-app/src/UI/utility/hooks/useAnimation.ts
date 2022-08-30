import { useEffect, useRef } from 'react';

// https://css-tricks.com/using-requestanimationframe-with-react-hooks/
export const useAnimation = (
  callback: (deltaTime: number) => void,
  fps?: number
) => {
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
