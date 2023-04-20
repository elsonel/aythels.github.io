import { useEffect, useState } from 'react';

export default function useDocumentScrollbarWidth(
  callback?: (progress: number) => void
) {
  const [scrollbarWidth, setScrollbarWidth] = useState(0);

  useEffect(() => {
    function updateSize() {
      setScrollbarWidth(
        window.innerWidth - document.documentElement.offsetWidth
      );
    }

    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [callback]);

  return scrollbarWidth;
}
