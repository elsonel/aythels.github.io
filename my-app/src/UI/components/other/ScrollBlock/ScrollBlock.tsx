import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const FULL_SCREEN_ID = '_fullScreenElement';

export interface ScrollBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  scrollLength: number;
}

export const ScrollBlock: React.FC<ScrollBlockProps> = ({
  scrollLength,
  ...props
}): React.ReactElement => {
  useEffect(() => {
    if (document.getElementById(FULL_SCREEN_ID)) return;

    const fullScreenElement = document.createElement('div');
    fullScreenElement.id = FULL_SCREEN_ID;
    fullScreenElement.style.cssText = `
      width: 100%;
      height: 100vh;
    `;
    document.body.appendChild(fullScreenElement);
    return () => fullScreenElement.remove();
  });

  return createPortal(
    <Wrapper $height={scrollLength} {...props} />,
    document.body
  );
};

const Wrapper = styled.div<{ $height: number }>`
  width: 100%;
  height: ${({ $height }) => $height}px;
`;
