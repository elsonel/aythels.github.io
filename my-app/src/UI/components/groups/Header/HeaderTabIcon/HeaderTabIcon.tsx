import React from 'react';
import styled, { useTheme } from 'styled-components';
import { IIconSVG } from '../../../atoms/IIconSVG/IIconSVG';
import { LinkFake } from '../../../inputs/LinkFake/LinkFake';

export interface IHeaderTabIconProps
  extends React.HTMLAttributes<HTMLDivElement> {
  href?: string;
  onClick?: () => void;
}

export const HeaderTabIcon: React.FC<IHeaderTabIconProps> = ({
  href,
  onClick,
  ...props
}): React.ReactElement => {
  const { color, icon } = useTheme();

  return (
    <Wrapper {...props}>
      <LinkFake href={href} onClick={onClick}>
        <IIconSVG src={icon.logo} size={20} color={color.text} />
      </LinkFake>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;
