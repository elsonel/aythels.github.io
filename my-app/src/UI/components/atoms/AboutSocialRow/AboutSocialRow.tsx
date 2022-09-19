import React from 'react';
import styled, { useTheme } from 'styled-components';
import { Linkedin, Github } from '@styled-icons/fa-brands/';
import { Email } from '@styled-icons/material-rounded/';
import { IconLinkExternal } from '../../inputs/IconExternalLink';
import { RowIcon, RowIconProps } from '../../layout/RowIcon';
import { ThemeInterface } from '../../../utility/themes/Theme';

export interface AboutSocialRowProps extends RowIconProps {}

export const AboutSocialRow: React.FC<AboutSocialRowProps> = ({
  ...props
}): React.ReactElement => {
  const theme = useTheme() as ThemeInterface;

  return (
    <RowIcon size={32} gap={40} {...props}>
      <IconLinkExternal
        src={Linkedin}
        to={theme.link.linkedin}
        color={theme.color.text}
        colorHovered={theme.color.textHovered}
      />
      <IconLinkExternal
        src={Github}
        to={theme.link.github}
        color={theme.color.text}
        colorHovered={theme.color.textHovered}
      />
      <IconLinkExternal
        src={Email}
        to={theme.link.email}
        color={theme.color.text}
        colorHovered={theme.color.textHovered}
      />
    </RowIcon>
  );
};
