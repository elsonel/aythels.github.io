import React from 'react';
import styled from 'styled-components';
import { Image } from '../../../atoms/Image';
import Tilt from 'react-parallax-tilt';
import { FadeIn } from '../../../other/FadeIn/FadeIn';

export interface IImageCardProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  onClick?: () => void;
}

export const ImageCard: React.FC<IImageCardProps> = ({
  src,
  alt,
  onClick,
  ...props
}): React.ReactElement => (
  <Wrapper onClick={onClick} {...props}>
    <StyledTilt scale={1.12} tiltReverse tiltMaxAngleX={8} tiltMaxAngleY={8}>
      <StyledImage src={src} alt={alt} />
      <ImageOverlay />
    </StyledTilt>
  </Wrapper>
);

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  cursor: pointer;
`;

const StyledTilt = styled(Tilt)`
  width: 100%;
`;

const StyledImage = styled(Image)`
  width: 100%;
  pointer-events: none;
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  box-shadow: inset 0 0 0 1px ${({ theme }) => `${theme.color.outline}`};
`;
