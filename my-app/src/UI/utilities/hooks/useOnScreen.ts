import { useEffect, useState, useRef, RefObject } from 'react';

// https://stackoverflow.com/questions/58341787/intersectionobserver-with-react-hooks
// Using rootMargin in observer options might bug out dimensions due to Storybook.js viewport
// Fix by setting the observer root option to document when in Storybook.js!
export default function useOnScreen(
  ref: RefObject<HTMLElement> | HTMLElement,
  options?: IntersectionObserverInit
) {
  const [isOnScreen, setIsOnScreen] = useState(false);
  const [observer, setObserver] = useState<IntersectionObserver>();

  useEffect(() => {
    setObserver(
      new IntersectionObserver(
        ([entry]) => setIsOnScreen(entry.isIntersecting),
        options
      )
    );
  }, [options]);

  useEffect(() => {
    if (!!observer && ref) {
      const element = 'current' in ref ? ref.current! : ref;
      observer.observe(element);

      return () => {
        observer.unobserve(element);
        observer!.disconnect();
      };
    }
  }, [ref, observer]); // Let the triggers fire the effect too on changes

  return isOnScreen;
}

/*
// Example Usage
function DumbComponent() {

  const ref = useRef()

  const onScreen = useOnScreen(ref)

  return <div ref={ref}>{onScreen && "I'm on screen!"}</div>
}
*/
