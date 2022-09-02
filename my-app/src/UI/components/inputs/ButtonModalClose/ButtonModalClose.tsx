import React from 'react';
import styled from 'styled-components';
import { IIconSVG } from '../../atoms/IIconSVG';
import { ButtonModal, ButtonModalProps } from '../ButtonModal';
import { Theme } from '../../../utility/themes/Theme';

export interface ButtonModalCloseProps extends ButtonModalProps {
  onClick?: () => void;
}

export const ButtonModalClose: React.FC<ButtonModalCloseProps> = ({
  onClick,
  ...props
}): React.ReactElement => {
  return (
    <Button onClick={onClick} {...props}>
      <Icon size={20} src={Theme.icon.modalClose} />
    </Button>
  );
};

const Button = styled(ButtonModal)`
  width: 32px;
  height: 32px;

  &:hover {
    > * {
      color: ${({ theme }) => `${theme.color.background}`};
    }
  }
`;

const Icon = styled(IIconSVG)`
  color: ${({ theme }) => `${theme.color.outline}`};
`;
