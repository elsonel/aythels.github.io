import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Button, ButtonProps } from '../Button';

export interface ButtonReverseProps extends ButtonProps {
  isDisabled?: boolean;
  onMouseLeave?: () => void;
  onMouseDown?: () => void;
  onMouseUp?: () => void;
}

export const ButtonReverse: React.FC<ButtonReverseProps> = ({
  isDisabled = false,
  onMouseLeave,
  onMouseDown,
  onMouseUp,
  ...props
}): React.ReactElement => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <ButtonLayoutStyled
      onMouseLeave={() => {
        setIsClicked(false);
        onMouseLeave && onMouseLeave();
      }}
      onMouseDown={() => {
        setIsClicked(true);
        onMouseDown && onMouseDown();
      }}
      onMouseUp={() => {
        setIsClicked(false);
        onMouseUp && onMouseUp();
      }}
      $isClicked={isClicked}
      isDisabled={isDisabled}
      isClickStateEnabled={false}
      {...props}
    />
  );
};

const ButtonDisabled = css`
  opacity: 0.4;
`;

const ButtonEnabled = css<{ $isClicked: boolean }>`
  opacity: ${({ $isClicked }) => ($isClicked ? 0.7 : 1.0)};
`;

const ButtonLayoutStyled = styled(Button)<{
  $isClicked: boolean;
  isDisabled: boolean;
}>`
  ${({ isDisabled }) => (isDisabled ? ButtonDisabled : ButtonEnabled)}
`;
