import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import useOnWindowResizeDelta from '../../../utility/hooks/useOnWindowResizeDelta';
import useOnWindowScrollDelta from '../../../utility/hooks/useOnWindowScrollDelta';

export interface StickyEndsContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  topMargin?: number;
  bottomMargin?: number;
  children?: React.ReactNode;
}

// This component works based on the window's scrollbar
export const StickyEndsContainer: React.FC<StickyEndsContainerProps> = ({
  topMargin = 0,
  bottomMargin = 0,
  children,
  ...props
}): React.ReactElement => {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(topMargin);
  const [scrollDelta, setScrollDelta] = useState(0);

  useOnWindowScrollDelta((delta) => setScrollDelta(delta));
  const [sizeDeltaX, sizeDeltaY] = useOnWindowResizeDelta();

  const handleRef = (scrollDelta: number) => {
    if (!ref || !ref.current) return;

    const coords = ref.current.getBoundingClientRect();

    // The viewing window or available viewport space for the element
    const viewport = Math.max(0, window.innerHeight - topMargin - bottomMargin);

    // How much of the element is beyond the viewing window
    const excess = coords.height > viewport ? coords.height - viewport : 0;

    if (scrollDelta <= 0) {
      // Scrolling down
      setOffset(Math.max(topMargin - excess, offset + scrollDelta));
    } else if (scrollDelta > 0) {
      // Scrolling up
      setOffset(Math.min(topMargin, offset + scrollDelta));
    }
  };

  useEffect(() => {
    // On scroll
    handleRef(scrollDelta);
  }, [scrollDelta]);

  useEffect(() => {
    // On window resize
    handleRef(-sizeDeltaY);
  }, [sizeDeltaY]);

  return (
    <Sticky $offset={offset} ref={ref} {...props}>
      {children}
    </Sticky>
  );
};

const Sticky = styled.div<{ $offset: number }>`
  position: sticky;
  top: ${({ $offset }) => $offset}px;
`;
