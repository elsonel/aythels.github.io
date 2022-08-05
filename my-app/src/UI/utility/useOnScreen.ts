import { useEffect, useState, useRef, RefObject } from 'react';

//https://stackoverflow.com/questions/58341787/intersectionobserver-with-react-hooks
// Using rootMargin in options might bug out due to Storybook.js
// Fix by setting root to document when in Storybook.js!
export default function useOnScreen(
  ref: RefObject<HTMLElement>,
  triggers: any[] = [], // Add triggers
  options?: IntersectionObserverInit
) {
  const [isOnScreen, setIsOnScreen] = useState(false);
  const observerRef = useRef<IntersectionObserver>();

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => setIsOnScreen(entry.isIntersecting),
      options
    );
  }, []);

  useEffect(() => {
    if (!!observerRef.current && !!ref.current) {
      observerRef.current.observe(ref.current);

      return () => {
        observerRef.current!.disconnect();
      };
    }
  }, [ref, ...triggers]); // Let the triggers fire the effect too on changes

  return isOnScreen;
}
