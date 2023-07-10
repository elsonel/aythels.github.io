import { useLayoutEffect, useState } from 'react';

export const useWindowScrollbarWidth = () => {
  const [scrollbarWidth, setScrollbarWidth] = useState(0);

  useLayoutEffect(() => {
    const scrollDiv = document.createElement('div');
    scrollDiv.style.overflow = 'scroll';
    scrollDiv.style.width = '100px';
    scrollDiv.style.height = '100px';
    scrollDiv.style.position = 'absolute';
    scrollDiv.style.top = '-9999px';
    document.body.appendChild(scrollDiv);

    const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);

    setScrollbarWidth(scrollbarWidth);
  }, []);

  return scrollbarWidth;
};
