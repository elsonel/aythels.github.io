import React from 'react';
import styled from 'styled-components';
import { GlobalScrollLock } from '../../../utility/styles/GlobalStyles';

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  isVisible?: boolean;
  children?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  isVisible = true,
  children,
  ...props
}): React.ReactElement => {
  return (
    <Wrapper $isVisible={isVisible} {...props}>
      {isVisible && <GlobalScrollLock />}
      <Content>{children}</Content>
    </Wrapper>
  );
};

// https://www.bram.us/2021/07/08/the-large-small-and-dynamic-viewports/
// A padding of 150px will account for IOS Safari's navigation bar height
const Wrapper = styled.div<{ $isVisible: boolean }>`
  overflow: hidden;
  z-index: ${({ theme }) => theme.layer.modal};
  position: fixed;

  top: -150px;
  left: -150px;
  width: 100vw;
  height: 100vh;
  height: 100dvh;
  padding: 150px;

  transform: ${({ $isVisible }) => ($isVisible ? 'scale(1)' : 'scale(1.05)')};
  background-color: ${({ theme }) => theme.color.background};
  pointer-events: ${({ $isVisible }) => ($isVisible ? 'auto' : 'none')};
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: ${({ theme }) => `${theme.speed.normal}`};
  transition-property: opacity, transform, height;
`;

const Content = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  background: lightblue;
`;
