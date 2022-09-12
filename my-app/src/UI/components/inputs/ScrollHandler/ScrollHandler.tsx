import React, { SyntheticEvent } from 'react';
import useOnWindowScrollDelta from '../../../utility/hooks/useOnWindowScrollDelta';

const upKeys: { [key: string]: boolean } = {
  ArrowUp: true,
  PageUp: true,
  Home: true,
};

const downKeys: { [key: string]: boolean } = {
  ArrowDown: true,
  PageDown: true,
  End: true,
  ' ': true,
};

export interface ScrollHandlerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  onUp?: (e: SyntheticEvent) => void;
  onDown?: (e: SyntheticEvent) => void;
  onScrollWindow?: (e: number) => void;
  scrollTriggers?: any[];
}

export const ScrollHandler: React.FC<ScrollHandlerProps> = ({
  onUp,
  onDown,
  onScrollWindow,
  scrollTriggers = [],
  children,
  ...props
}): React.ReactElement => {
  useOnWindowScrollDelta(onScrollWindow, scrollTriggers);

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

  // onkeypress
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (downKeys[e.key] || downKeys[e.code]) onDown && onDown(e);
    else if (upKeys[e.key] || upKeys[e.code]) onUp && onUp(e);
  };

  return (
    <div
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
