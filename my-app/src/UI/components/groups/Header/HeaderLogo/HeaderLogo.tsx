import React from 'react';
import { IIconSVG } from '../../../atoms/IIconSVG';
import { LinkFake } from '../../../inputs/LinkFake';

export interface HeaderLogoProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  onClick?: () => void;
}

export const HeaderLogo: React.FC<HeaderLogoProps> = ({
  onClick,
  ...props
}): React.ReactElement => {
  return (
    <LinkFake onClick={onClick} {...props}>
      <IIconSVG src="/icons/logo.svg" size={24} />
    </LinkFake>
  );
};
