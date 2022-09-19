import React from 'react';
import styled, { useTheme } from 'styled-components';
import { Linkedin, Github } from '@styled-icons/fa-brands/';
import { Email } from '@styled-icons/material-rounded/';
import { IconLinkExternal } from '../../../inputs/IconExternalLink/IconLinkExternal';
import { RowIcon, RowIconProps } from '../../../layout/RowIcon';
import { ThemeInterface } from '../../../../utility/themes/Theme';

export interface FooterIconRowProps extends RowIconProps {}

export const FooterIconRow: React.FC<FooterIconRowProps> = ({
  ...props
}): React.ReactElement => {
  const theme = useTheme() as ThemeInterface;
  return (
    <RowIcon size={24} {...props}>
      <IconLinkExternal src={Linkedin} to={theme.link.linkedin} />
      <IconLinkExternal src={Github} to={theme.link.github} />
      <IconLinkExternal src={Email} to={theme.link.email} />
    </RowIcon>
  );
};
