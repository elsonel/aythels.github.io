import React from 'react';
import styled from 'styled-components';
import { Theme } from '../../../utility/themes/Theme';
import { ButtonReverse, ButtonReverseProps } from '../ButtonReverse';

export interface ButtonModalProps extends ButtonReverseProps {
  onClick?: () => void;
}

export const ButtonModal: React.FC<ButtonModalProps> = ({
  onClick,
  ...props
}): React.ReactElement => {
  return (
    <ButtonReverse
      size="small"
      border={Theme.color.outline}
      borderReversed={Theme.color.text}
      primary={'transparent'}
      secondary={Theme.color.outline}
      primaryReversed={Theme.color.background}
      secondaryReversed={Theme.color.text}
      onClick={onClick}
      {...props}
    />
  );
};
