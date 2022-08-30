import React, { SyntheticEvent, useEffect, useState } from 'react';

let oldValue = window.pageYOffset;

export interface ScrollHandlerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  onUp?: (e: SyntheticEvent) => void;
  onDown?: (e: SyntheticEvent) => void;
  onScrollWindow?: (e: number) => void;
  onScrollWindowDependents?: any[];
}

export const ScrollHandler: React.FC<ScrollHandlerProps> = ({
  onUp,
  onDown,
  onScrollWindow,
  onScrollWindowDependents = [],
  children,
  ...props
}): React.ReactElement => {
  useEffect(() => {
    const handleScroll = (e: Event) => {
      const newValue = window.pageYOffset;

      onScrollWindow && onScrollWindow(oldValue - newValue);

      //if (oldValue - newValue < 0) direction = 'DOWN';
      // else if (oldValue - newValue > 0) direction = 'UP';

      oldValue = newValue;
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, onScrollWindowDependents);

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

  //onkeypress
  const upKeys: { [key: string]: boolean } = {
    ArrowUp: true,
    PageUp: false,
    Home: false,
  };

  const downKeys: { [key: string]: boolean } = {
    ArrowDown: true,
    PageDown: false,
    End: false,
    ' ': false,
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (downKeys[e.key] || downKeys[e.code]) onDown && onDown(e);
    else if (upKeys[e.key] || upKeys[e.code]) onUp && onUp(e);
  };

  return (
    <div
      tabIndex={0}
      onWheel={handleWheel}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onKeyDown={handleKeyDown}
      {...props}
    >
      {children}
    </div>
  );
};
