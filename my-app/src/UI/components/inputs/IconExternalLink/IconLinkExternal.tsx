import React from 'react';
import styled from 'styled-components';
import { Theme } from '../../../utility/themes/Theme';
import { IIconSVG, IIconSVGProps } from '../../atoms/IIconSVG';

export interface IconLinkExternalProps extends IIconSVGProps {
  to: string;
  size?: number | string;
  color?: string;
  colorHovered?: string;
}

export const IconLinkExternal: React.FC<IconLinkExternalProps> = ({
  to,
  size = 32,
  color = Theme.color.textNeutral,
  colorHovered = Theme.color.textHovered,
  ...props
}): React.ReactElement => {
  return (
    <Link $size={size} href={to} target="_blank" rel="noreferrer">
      <Icon $color={color} $colorHovered={colorHovered} {...props} />
    </Link>
  );
};

const Link = styled.a<{ $size: number | string }>`
  display: inline-flex;

  width: ${({ $size }) => (typeof $size === 'number' ? `${$size}px` : $size)};
  height: ${({ $size }) => (typeof $size === 'number' ? `${$size}px` : $size)};

  cursor: pointer;
`;

const Icon = styled(IIconSVG)<{ $color: string; $colorHovered: string }>`
  width: inherit;
  height: inherit;

  color: ${({ $color }) => $color};
  &:hover {
    color: ${({ $colorHovered }) => $colorHovered};
  }

  transition: ${({ theme }) => theme.speed.normal};
`;
