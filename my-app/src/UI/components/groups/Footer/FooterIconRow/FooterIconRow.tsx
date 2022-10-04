import React from 'react';
import styled, { useTheme } from 'styled-components';
import { Linkedin, Github } from '@styled-icons/fa-brands/';
import { Email } from '@styled-icons/material-rounded/';
import { LinkIcon } from '../../../inputs/LinkIcon/LinkIcon';
import { RowIcon, RowIconProps } from '../../../layout/RowIcon';
import { ThemeInterface } from '../../../../utility/themes/Theme';

export interface FooterIconRowProps extends RowIconProps {}

export const FooterIconRow: React.FC<FooterIconRowProps> = ({
  ...props
}): React.ReactElement => {
  const theme = useTheme() as ThemeInterface;
  return (
    <RowIcon size={24} {...props}>
      <LinkIcon src={Linkedin} href={theme.link.linkedin} />
      <LinkIcon src={Github} href={theme.link.github} />
      <LinkIcon src={Email} href={theme.link.email} />
    </RowIcon>
  );
};
