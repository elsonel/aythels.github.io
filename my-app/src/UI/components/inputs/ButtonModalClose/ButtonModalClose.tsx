import React from 'react';
import styled from 'styled-components';
import { IIconSVG } from '../../atoms/IIconSVG';
import { ButtonModal, ButtonModalProps } from '../ButtonModal';
import { Theme } from '../../../utility/themes/Theme';

export interface ButtonModalCloseProps extends ButtonModalProps {}

export const ButtonModalClose: React.FC<ButtonModalCloseProps> = ({
  ...props
}): React.ReactElement => {
  return (
    <Button keys={['Escape']} {...props}>
      <IIconSVG size={16} src={Theme.icon.modalClose} />
    </Button>
  );
};

const Button = styled(ButtonModal)`
  width: 32px;
  height: 32px;
`;
