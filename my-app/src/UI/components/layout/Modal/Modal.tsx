import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { GlobalScrollLock } from '../../../utility/styles/GlobalStyles';

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  isVisible?: boolean;
  children?: React.ReactNode;
}

const DELAY = 300;

export const Modal: React.FC<ModalProps> = ({
  isVisible = true,
  children,
  ...props
}): React.ReactElement => {
  const [isBackgroundHidden, setIsBackgroundHidden] = useState(isVisible);

  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined;
    if (isVisible)
      timeout = setTimeout(() => setIsBackgroundHidden(true), DELAY);
    else setIsBackgroundHidden(false);
    return () => clearTimeout(timeout);
  }, [isVisible]);

  return (
    <Wrapper $isVisible={isVisible} {...props}>
      {isBackgroundHidden && <GlobalScrollLock />}
      <Content>{children}</Content>
    </Wrapper>
  );
};

// https://www.bram.us/2021/07/08/the-large-small-and-dynamic-viewports/
// Can also set 'visibility: hidden' on body to hide background

const Wrapper = styled.div<{ $isVisible: boolean }>`
  z-index: ${({ theme }) => theme.layer.modal};
  overflow: hidden;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  height: 100dvh;

  background: lightblue;
  pointer-events: ${({ $isVisible }) => ($isVisible ? 'auto' : 'none')};
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: ${({ theme }) => theme.speed.normal}ms;
  transition-property: opacity;
`;

const Content = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
`;
