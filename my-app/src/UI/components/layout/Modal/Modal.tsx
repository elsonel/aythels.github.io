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
    <Wrapper $isVisible={isVisible} {...props}>
      <Empty
        $isVisible={isVisible}
        onTransitionEnd={() =>
          !isVisible && onCloseComplete && onCloseComplete()
        }
      />
      <Content>{children}</Content>
      {isVisible && <GlobalScrollLock />}
    </Wrapper>,
    document.body
  );

// https://www.bram.us/2021/07/08/the-large-small-and-dynamic-viewports/

const Wrapper = styled.div<{ $isVisible: boolean }>`
  z-index: ${({ theme }) => theme.layer.modal};
  overflow: hidden;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100dvh;

  pointer-events: ${({ $isVisible }) => ($isVisible ? 'auto' : 'none')};
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: ${({ theme }) => theme.speed.normal}ms;
  transition-property: opacity;
`;

const Content = styled.div`
  width: 100vw;
  height: 100%;
`;

// Needed because onTransitionEnd set on the parent sometimes fires prematurely
const Empty = styled.div<{ $isVisible: boolean }>`
  position: absolute;
  top: 0px;
  left: 0px;

  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: inherit;
  transition-property: inherit;
  pointer-events: none;
`;
