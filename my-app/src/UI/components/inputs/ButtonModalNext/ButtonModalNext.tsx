import React from 'react';
import styled from 'styled-components';
import { Theme } from '../../../utility/themes/Theme';
import { IIconSVG } from '../../atoms/IIconSVG';
import { ButtonModal, ButtonModalProps } from '../ButtonModal';

export interface ButtonModalNextProps extends ButtonModalProps {
  direction: 'LEFT' | 'RIGHT';
}

export const ButtonModalNext: React.FC<ButtonModalNextProps> = ({
  direction,
  ...props
}): React.ReactElement => {
  return (
    <Button {...props}>
      <Icon
        size={20}
        src={
          direction === 'LEFT' ? Theme.icon.modalLeft : Theme.icon.modalRight
        }
      />
    </Button>
  );
};

const Button = styled(ButtonModal)`
  width: 96px;
  height: 48px;

  &:hover {
    > * {
      color: ${({ theme }) => `${theme.color.background}`};
    }
  }
`;

const Icon = styled(IIconSVG)`
  color: ${({ theme }) => `${theme.color.outline}`};
`;