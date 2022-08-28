import React from 'react';
import styled from 'styled-components';
import { IIcon, IIconProps } from '../IIcon';

export interface IIconSVGProps extends IIconProps {
  color?: string;
  src:
    | string
    | React.ForwardRefExoticComponent<React.RefAttributes<SVGSVGElement>>;
}

export const IIconSVG: React.FC<IIconSVGProps> = ({
  color = '#000000',
  src,
  children,
  ...props
}): React.ReactElement => {
  if (typeof src === 'string' && !src.endsWith('.svg'))
    throw 'Source must be a SVG!';

  return (
    <Wrapper $color={color} {...props}>
      {typeof src === 'string' ? (
        <IconSVG $src={src} />
      ) : (
        <IconStyled as={src} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled(IIcon)<{ $color: string }>`
  color: ${({ $color }) => $color};
`;

const IconStyled = styled.svg<{
  as: React.ForwardRefExoticComponent<React.RefAttributes<SVGSVGElement>>;
}>`
  color: inherit;
`;

const IconSVG = styled.div<{ $src: string }>`
  color: inherit;

  background-color: currentColor;
  -webkit-mask: ${({ $src }) => `url(${$src}) no-repeat center`};
  mask: ${({ $src }) => `url(${$src}) no-repeat center`};
`;
