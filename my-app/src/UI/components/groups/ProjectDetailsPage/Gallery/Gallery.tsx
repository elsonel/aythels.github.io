import React from 'react';
import styled, { useTheme } from 'styled-components';
import { KineticBoardwalkImages } from '../../../../../utilities/ImportImages';
import { Image } from '../../../atoms/Image';
import Tilt from 'react-parallax-tilt';

const IMAGE_SRC = [
  KineticBoardwalkImages.get('2a_2560.jpg'),
  KineticBoardwalkImages.get('2b_2560.jpg'),
  KineticBoardwalkImages.get('2c_2560.jpg'),
  KineticBoardwalkImages.get('2d_2560.jpg'),
  KineticBoardwalkImages.get('2e_2560.jpg'),
  KineticBoardwalkImages.get('2f_2560.jpg'),
  KineticBoardwalkImages.get('3a_2560.jpg'),
  KineticBoardwalkImages.get('3b_2560.jpg'),
  KineticBoardwalkImages.get('3c_2560.jpg'),
  KineticBoardwalkImages.get('3d_2560.jpg'),
  KineticBoardwalkImages.get('3e_2560.jpg'),
  KineticBoardwalkImages.get('3f_2560.jpg'),
];

export interface IGalleryProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Gallery: React.FC<IGalleryProps> = ({
  ...props
}): React.ReactElement => {
  const { color } = useTheme();

  return (
    <Wrapper {...props}>
      <Row>
        <StyledTilt scale={1.1} tiltReverse tiltMaxAngleX={8} tiltMaxAngleY={8}>
          <StyledImage src={IMAGE_SRC[0]} />
          <ImageOverlay />
        </StyledTilt>
        <ImageWrapper>
          <StyledImage src={IMAGE_SRC[1]} />
        </ImageWrapper>
        <ImageWrapper>
          <StyledImage src={IMAGE_SRC[2]} />
        </ImageWrapper>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 1000px;
  padding: 20px;
  margin: auto;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
`;

const StyledTilt = styled(Tilt)`
  flex-shrink: 1;
  position: relative;
  width: 100%;
  cursor: pointer;
`;

const ImageWrapper = styled.div`
  flex-shrink: 1;
  position: relative;
  width: 100%;
  cursor: pointer;
`;

const StyledImage = styled(Image)`
  width: 100%;
  pointer-event: none;
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  box-shadow: inset 0 0 0 1px ${({ theme }) => `${theme.color.outline}`};
`;
