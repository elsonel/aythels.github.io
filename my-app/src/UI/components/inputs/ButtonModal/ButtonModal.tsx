import React from 'react';
import styled from 'styled-components';
import { Theme } from '../../../utility/themes/Theme';
import { ButtonReverse, ButtonReverseProps } from '../ButtonReverse';

export interface ButtonModalProps extends ButtonReverseProps {}

export const ButtonModal: React.FC<ButtonModalProps> = ({
  ...props
}): React.ReactElement => {
  return (
    <Button
      border={Theme.color.outline}
      borderHovered={Theme.color.text}
      color={Theme.color.background}
      colorHovered={Theme.color.text}
      {...props}
    />
  );
};

const Button = styled(ButtonReverse)`
  //border-width: 2px;
`;
