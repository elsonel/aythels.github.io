import React from 'react';
import styled from 'styled-components';
import { IIconSVG } from '../../atoms/IIconSVG';
import { Theme } from '../../../utilities/themes/Theme';
import { Link, LinkProps } from '../Link';

export interface LinkIconProps extends LinkProps {
  src:
    | string
    | React.ForwardRefExoticComponent<React.RefAttributes<SVGSVGElement>>;
  size?: number | string;
  color?: string;
  colorHovered?: string;
}

export const LinkIcon: React.FC<LinkIconProps> = ({
  src,
  size = 32,
  color = Theme.color.textNeutral,
  colorHovered = Theme.color.textHovered,
  ...props
}): React.ReactElement => {
  return (
    <Link {...props}>
      <Icon src={src} color={color} $colorHovered={colorHovered} size={size} />
    </Link>
  );
};

const Icon = styled(IIconSVG)<{ $colorHovered: string }>`
  &:hover {
    color: ${({ $colorHovered }) => $colorHovered};
  }

  transition: ${({ theme }) => theme.speed.normal}ms;
`;
