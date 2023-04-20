import { useState } from 'react';
import useResizeObserver from '@react-hook/resize-observer';

export default function useDocumentScrollbarWidth() {
  const [scrollbarWidth, setScrollbarWidth] = useState(0);

  useResizeObserver(document.body, () => {
    setScrollbarWidth(window.innerWidth - document.body.offsetWidth);
  });

  return scrollbarWidth;
}
