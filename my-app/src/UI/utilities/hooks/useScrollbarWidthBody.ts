import { useCallback, useLayoutEffect, useState } from 'react';
import useOnWindowResize from './useOnWindowResize';

/**
 * Returns the actual width of the scrollbar for the given container element.
 *
 * This hook is used for layout purposes because the scrollbar on touch device
 * browsers is set to overlay mode, and therefore has 0 actual width, whereas
 * the scrollbar on most desktop browsers has an actual width that pushes the
 * content aside.
 */
export default function useScrollbarWidthBody() {
  const [scrollbarWidth, setScrollbarWidth] = useState(0);

  const getWindowScrollbarWidth = useCallback(() => {
    return window.innerWidth - document.documentElement.clientWidth;
  }, []);

  useOnWindowResize(() => setScrollbarWidth(getWindowScrollbarWidth()));

  useLayoutEffect(
    () => setScrollbarWidth(getWindowScrollbarWidth()),
    [getWindowScrollbarWidth]
  );

  return scrollbarWidth;
}
