import React from 'react';
import styled from "styled-components";

export interface ButtonModalProps extends React.HTMLAttributes<HTMLButtonElement> {
}

export const ButtonModal: React.FC<ButtonModalProps> = ({
  children,
  ...props
}): React.ReactElement => (
  <Button {...props}>{children}</Button>
);

const Button = styled.button`
  width: 100px;  
  height: 50px;
  
  box-sizing: content-box;
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  padding: 0px;
  
  border: none;

  ${({theme}) => `
    transition: ${theme.speed.normal};

    font-size: ${theme.font.size.h2};
    color: ${theme.colors.primary};

    background: ${theme.colors.background};

    &:hover {
      background: ${theme.colors.primary};
      color: ${theme.colors.background};
    }
    `
  };
`;
