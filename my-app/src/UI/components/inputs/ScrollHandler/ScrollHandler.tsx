import React, { SyntheticEvent, useEffect, useState } from 'react';

// https://stackoverflow.com/questions/53845595/wrong-react-hooks-behaviour-with-event-listener
// useStateRef !!!!

export interface ScrollHandlerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  onUp?: (e: SyntheticEvent) => void;
  onDown?: (e: SyntheticEvent) => void;
  onScrollWindow?: (e: Event) => void;
}

export const ScrollHandler: React.FC<ScrollHandlerProps> = ({
  onUp,
  onDown,
  onScrollWindow,
  children,
  ...props
}): React.ReactElement => {
  useEffect(() => {
    const handleScroll = (e: Event) => {
      onScrollWindow && onScrollWindow(e);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // When mouse wheel is triggered
  const handleWheel = (e: React.WheelEvent) => {
    if (e.deltaY > 0) onDown && onDown(e);
    else if (e.deltaY < 0) onUp && onUp(e);
  };

  // When screen is touched
  let startY = 0;
  const onTouchStart = (e: React.TouchEvent) => {
    startY = e.changedTouches[0].screenY;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const endY = e.changedTouches[0].screenY;
    const TOLERANCE = 5;

    if (startY > endY + TOLERANCE) onDown && onDown(e);
    else if (startY < endY - TOLERANCE) onUp && onUp(e);
  };

  return (
    <div
      onWheel={handleWheel}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      {...props}
    >
      {children}
    </div>
  );
};
