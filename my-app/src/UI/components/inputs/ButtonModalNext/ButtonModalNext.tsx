import React, { useState } from 'react';
import styled from 'styled-components';
import { Theme } from '../../../utilities/themes/Theme';
import { IIconSVG } from '../../atoms/IIconSVG';
import { ButtonModal, ButtonModalProps } from '../ButtonModal';

export interface ButtonModalNextProps extends ButtonModalProps {
  direction: 'LEFT' | 'RIGHT';
}

export const ButtonModalNext: React.FC<ButtonModalNextProps> = ({
  direction,
  ...props
}): React.ReactElement => {
  const key = direction === 'LEFT' ? 'ArrowLeft' : 'ArrowRight';

  return (
    <Button keys={[key]} {...props}>
      <IIconSVG
        size={24}
        src={
          direction === 'LEFT' ? Theme.icon.modalLeft : Theme.icon.modalRight
        }
      />
    </Button>
  );
};

const Button = styled(ButtonModal)`
  width: 52px;
  height: 52px;
`;
