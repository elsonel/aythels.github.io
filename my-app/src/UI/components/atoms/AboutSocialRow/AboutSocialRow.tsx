import React from 'react';
import styled, { useTheme } from 'styled-components';
import { Linkedin, Github } from '@styled-icons/fa-brands/';
import { Email } from '@styled-icons/material-rounded/';
import { LinkIcon } from '../../inputs/LinkIcon';
import { RowIcon, RowIconProps } from '../../layout/RowIcon';
import { ThemeInterface } from '../../../utilities/themes/Theme';

export interface AboutSocialRowProps extends RowIconProps {}

export const AboutSocialRow: React.FC<AboutSocialRowProps> = ({
  ...props
}): React.ReactElement => {
  const theme = useTheme() as ThemeInterface;

  return (
    <RowIcon size={32} gap={40} {...props}>
      <LinkIcon
        src={Linkedin}
        href={theme.link.linkedin}
        color={theme.color.text}
        colorHovered={theme.color.textHovered}
      />
      <LinkIcon
        src={Github}
        href={theme.link.github}
        color={theme.color.text}
        colorHovered={theme.color.textHovered}
      />
      <LinkIcon
        isOpeningNewTab={false}
        src={Email}
        href={theme.link.email}
        color={theme.color.text}
        colorHovered={theme.color.textHovered}
      />
    </RowIcon>
  );
};
