import React from 'react';
import styled from 'styled-components';
import { GlobalScrollHidden } from '../../../utility/styles/GlobalStyles';

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  isVisible?: boolean;
  children?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  isVisible = true,
  children,
  ...props
}): React.ReactElement => (
  <Wrapper $isVisible={isVisible} {...props}>
    {isVisible && <GlobalScrollHidden />}
    {children}
  </Wrapper>
);

const Wrapper = styled.div<{ $isVisible: boolean }>`
  z-index: ${({ theme }) => theme.layer.modal};
  position: fixed;

  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;

  transform: ${({ $isVisible }) => ($isVisible ? 'scale(1)' : 'scale(1.05)')};
  background: lightblue;
  pointer-events: ${({ $isVisible }) => ($isVisible ? 'auto' : 'none')};
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: ${({ theme }) => `${theme.speed.normal}`};
  transition-property: opacity, transform;
  overflow: hidden;
`;
