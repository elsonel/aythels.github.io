import React from 'react';
import { Theme } from '../../../../utility/themes/Theme';
import { IIconSVG } from '../../../atoms/IIconSVG';
import { LinkFake } from '../../../inputs/LinkFake';

export interface HeaderLogoProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  onClick?: () => void;
}

export const HeaderLogo: React.FC<HeaderLogoProps> = ({
  onClick: onClick,
  ...props
}): React.ReactElement => {
  return (
    <LinkFake onClick={onClick} {...props}>
      <IIconSVG src={Theme.icon.logo} size={20} />
    </LinkFake>
  );
};
