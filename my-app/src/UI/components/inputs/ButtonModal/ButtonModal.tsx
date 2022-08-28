import React from 'react';
import styled from 'styled-components';
import { Theme } from '../../../utility/Theme';
import { ButtonReverse, ButtonReverseProps } from '../ButtonReverse';

export interface ButtonModalProps extends ButtonReverseProps {
  onClick?: () => void;
}

export const ButtonModal: React.FC<ButtonModalProps> = ({
  icon,
  onClick,
  ...props
}): React.ReactElement => {
  return (
    <ButtonReverse
      size="small"
      border={Theme.colors.textPassive3}
      borderReversed={Theme.colors.text}
      primary={'transparent'}
      secondary={Theme.colors.textPassive3}
      primaryReversed={Theme.colors.background}
      secondaryReversed={Theme.colors.text}
      onClick={onClick}
      {...props}
    />
  );
};
