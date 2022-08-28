import React from 'react';
import styled from 'styled-components';
import { IIcon, IIconProps } from '../IIcon';

export interface IIconImageProps extends IIconProps {
  src: string;
}

export const IIconImage: React.FC<IIconImageProps> = ({
  src,
  ...props
}): React.ReactElement => {
  return (
    <IIcon {...props}>
      <StyledImg alt={src} src={src} />
    </IIcon>
  );
};

const StyledImg = styled.img`
  width: 100%;
  height: 100%;

  object-fit: contain;
  user-select: none;
`;
