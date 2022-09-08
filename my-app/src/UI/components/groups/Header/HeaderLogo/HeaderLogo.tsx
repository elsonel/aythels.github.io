import React from 'react';
import styled from 'styled-components';
import { IIconSVG } from '../../../atoms/IIconSVG';
import { LinkInternal } from '../../../other/LinkInternal';

export interface HeaderLogoProps extends React.HTMLAttributes<HTMLDivElement> {
  link: string;
  onNavigate?: () => void;
  onClick?: () => void;
}

export const HeaderLogo: React.FC<HeaderLogoProps> = ({
  link,
  onNavigate,
  onClick,
  ...props
}): React.ReactElement => {
  return (
    <Wrapper {...props}>
      <LinkInternal onClick={onClick} onNavigate={onNavigate} link={link}>
        <IIconSVG src="/icons/logo.svg" size={24} />
      </LinkInternal>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
