import React from 'react';
import styled from 'styled-components';
import { Linkedin, Github } from '@styled-icons/fa-brands/';
import { Email } from '@styled-icons/material-rounded/';
import { IconLinkExternal } from '../../../inputs/IconExternalLink/IconLinkExternal';
import { RowIcon, RowIconProps } from '../../../layout/RowIcon';

export interface FooterIconRowProps extends RowIconProps {}

export const FooterIconRow: React.FC<FooterIconRowProps> = ({
  ...props
}): React.ReactElement => {
  return (
    <RowIcon size={24} {...props}>
      <IconLinkExternal
        src={Linkedin}
        to="https://www.linkedin.com/in/elson-liang/"
      />
      <IconLinkExternal src={Github} to="https://github.com/elsonel" />
      <IconLinkExternal src={Email} to="mailto:elsonliangel@gmail.com" />
    </RowIcon>
  );
};
