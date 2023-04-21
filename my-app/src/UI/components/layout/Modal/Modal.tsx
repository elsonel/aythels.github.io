import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { GlobalScrollLock } from '../../../utilities/styles/GlobalStyles';

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  isVisible?: boolean;
  onCloseComplete?: () => void;
}

export const Modal: React.FC<ModalProps> = ({
  isVisible = true,
  children,
  onCloseComplete,
  ...props
}): React.ReactElement =>
  createPortal(
    <Wrapper
      $isVisible={isVisible}
      onTransitionEnd={() => !isVisible && onCloseComplete && onCloseComplete()}
      {...props}
    >
      {isVisible && <GlobalScrollLock />}
      <Content>{children}</Content>
    </Wrapper>,
    document.body
  );

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
