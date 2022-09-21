import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Button, ButtonProps } from '../Button';

export interface ButtonReverseProps extends ButtonProps {
  isDisabled?: boolean;
}

export const ButtonReverse: React.FC<ButtonReverseProps> = ({
  isDisabled = false,
  ...props
}): React.ReactElement => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <ButtonLayoutStyled
      onMouseDown={() => setIsClicked(true)}
      onMouseUp={() => setIsClicked(false)}
      $isClicked={isClicked}
      isDisabled={isDisabled}
      {...props}
    />
  );
};

const ButtonDisabled = css`
  opacity: 0.4;
`;

const ButtonEnabled = css<{ $isClicked: boolean }>`
  opacity: ${({ $isClicked }) => ($isClicked ? 0.8 : 1.0)};
`;

const ButtonLayoutStyled = styled(Button)<{
  $isClicked: boolean;
  isDisabled: boolean;
}>`
  ${({ isDisabled }) => (isDisabled ? ButtonDisabled : ButtonEnabled)}
`;