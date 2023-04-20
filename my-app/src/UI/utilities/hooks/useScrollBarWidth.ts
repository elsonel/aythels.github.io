import useResizeObserver from '@react-hook/resize-observer';
import { useState } from 'react';

/**
 * Returns the actual width of the scrollbar for the given container element.
 *
 * This hook is used for layout purposes because the scrollbar on touch device
 * browsers is set to overlay mode, and therefore has 0 actual width, whereas
 * the scrollbar on most desktop browsers has an actual width that pushes the
 * content aside.
 */
export default function useScrollbarWidth(
  ref: React.RefObject<HTMLElement> | HTMLElement | null
) {
  const [scrollbarWidth, setScrollbarWidth] = useState(0);

  useResizeObserver(ref, (entry) => {
    const element = entry.target as HTMLElement;
    setScrollbarWidth(element.offsetWidth - element.clientWidth);
  });

  return scrollbarWidth;
}
