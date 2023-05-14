import { useLayoutEffect, useState } from 'react';

export default function useOnWindowResize(callback?: () => void) {
  useLayoutEffect(() => {
    const onResize = () => {
      callback && callback();
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [callback]);
}
