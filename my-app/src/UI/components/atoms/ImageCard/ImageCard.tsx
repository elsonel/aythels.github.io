import React from 'react';
import styled from 'styled-components';
import { Image, ImageProps } from '../Image';
import Tilt from 'react-parallax-tilt';

export interface IImageCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageProps: ImageProps;
  onImageLoad?: (isSuccessful: boolean) => void;
}

export const ImageCard: React.FC<IImageCardProps> = ({
  imageProps,
  onImageLoad,
  ...props
}): React.ReactElement => (
  <Wrapper {...props}>
    <StyledTilt scale={1.12} tiltReverse tiltMaxAngleX={10} tiltMaxAngleY={10}>
      <StyledImage
        {...imageProps}
        onLoad={(e) => {
          imageProps.onLoad && imageProps.onLoad(e);
          onImageLoad && onImageLoad(true);
        }}
        onError={(e) => {
          imageProps.onError && imageProps.onError(e);
          onImageLoad && onImageLoad(false);
        }}
      />
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
  color: ${({ theme }) => theme.color.outline};
  box-shadow: inset 0 0 0 1px;

  &:hover {
    color: ${({ theme }) => theme.color.textNeutral};
  }

  transition-duration: ${({ theme }) => theme.speed.normal}ms;
`;
