import React from 'react';
import styled, { useTheme } from 'styled-components';
import { ButtonReverse, ButtonReverseProps } from '../ButtonReverse';

export interface ButtonModalProps extends ButtonReverseProps {}

export const ButtonModal: React.FC<ButtonModalProps> = ({
  ...props
}): React.ReactElement => {
  const { color } = useTheme();

  return (
    <Button
      border={color.backgroundOppositeHighlight}
      borderHovered={color.background}
      color="transparent"
      //colorHovered={color.background}
      {...props}
    />
  );
};

const Button = styled(ButtonReverse)`
  color: ${({ theme }) => theme.color.background};

  &:hover {
    //color: ${({ theme }) => theme.color.backgroundOpposite};
  }
`;
