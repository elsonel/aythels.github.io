import React from 'react';
import styled from 'styled-components';
import { GlobalScrollHidden } from '../../../utility/styles/GlobalStyles';

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  isVisible?: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  isVisible = false,
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

  background: lightblue;
  user-select: none;
  pointer-events: ${({ $isVisible }) => ($isVisible ? 'auto' : 'none')};
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: ${({ theme }) => `${theme.speed.normal}`};
  transition-property: opacity;
`;
