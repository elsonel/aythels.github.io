import React from 'react';
import styled from 'styled-components';
import { IIconSVG, IIconSVGProps } from '../../atoms/IIconSVG';

export interface IconLinkExternalProps extends IIconSVGProps {
  to: string;
  size?: number | string;
}

export const IconLinkExternal: React.FC<IconLinkExternalProps> = ({
  to,
  size = 32,
  ...props
}): React.ReactElement => {
  return (
    <Link $size={size} href={to} target="_blank" rel="noreferrer">
      <Icon {...props} />
    </Link>
  );
};

const Link = styled.a<{ $size: number | string }>`
  display: inline-flex;

  width: ${({ $size }) => (typeof $size === 'number' ? `${$size}px` : $size)};
  height: ${({ $size }) => (typeof $size === 'number' ? `${$size}px` : $size)};

  cursor: pointer;
`;

const Icon = styled(IIconSVG)`
  width: inherit;
  height: inherit;

  color: ${({ theme }) => theme.color.textNeutral};
  &:hover {
    color: ${({ theme }) => theme.color.textHovered};
  }

  transition: ${({ theme }) => theme.speed.normal};
`;
