import React, { useEffect, useRef, useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { KineticBoardwalkImages } from '../../../../../utility/ImportImages';
import { clamp } from '../../../../utility/scripts/Math';
import { GreaterThan } from '../../../../utility/styles/ResponsiveCSS';
import { IconScroll } from '../../../atoms/IconScroll/IconScroll';
import { Image as IImage } from '../../../atoms/Image/Image';
import { Paragraph } from '../../../text/Paragraph/Paragraph';
import useResizeObserver from '@react-hook/resize-observer';

export interface GalleryProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageSrcSet?: string;
}

const IMAGE_SRC = [
  KineticBoardwalkImages.get('3f_2560.jpg'),
  KineticBoardwalkImages.get('2a_2560.jpg'),
  KineticBoardwalkImages.get('2c_2560.jpg'),
  KineticBoardwalkImages.get('2e_2560.jpg'),
  KineticBoardwalkImages.get('3a_2560.jpg'),
  KineticBoardwalkImages.get('3c_2560.jpg'),
  KineticBoardwalkImages.get('3e_2560.jpg'),
  KineticBoardwalkImages.get('2b_2560.jpg'),
  KineticBoardwalkImages.get('2d_2560.jpg'),
  KineticBoardwalkImages.get('2f_2560.jpg'),
  KineticBoardwalkImages.get('3b_2560.jpg'),
  KineticBoardwalkImages.get('3d_2560.jpg'),
];

export const Gallery: React.FC<GalleryProps> = ({
  title,
  subtitle,
  imageSrc,
  imageSrcSet,
  ...props
}): React.ReactElement => {
  const [containerHeight, setContainerHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<HTMLDivElement[]>([]);

  /*
  const renderImages = () => {
    const columnLeft: React.ReactElement[] = [];
    const columnRight: React.ReactElement[] = [];

    IMAGE_SRC.forEach((src, i) => {
      const element = <StyledImage key={src} ref={imageRefs[i]} src={src} />;
      if (i % 2 === 0) columnLeft.push(element);
      else columnRight.push(element);
    });

    return (
      <>
        <ImageColumnLeft>{columnLeft}</ImageColumnLeft>
        <ImageColumnRight>{columnRight}</ImageColumnRight>
      </>
    );
  };*/
  /*
  useResizeObserver(containerRef, (entry) => {
    // This doesn't trigger a re-render
    const height = entry.borderBoxSize[0].blockSize;
    setContainerHeight(height);
  });*/

  const onScroll = () => {
    if (!containerRef.current) return;

    const containerHeight = containerRef.current.clientHeight;
    const containerCenterY = containerHeight / 2;

    imageRefs.current.forEach((element) => {
      const dimensions = element.getBoundingClientRect();
      const centerY = dimensions.y + dimensions.height / 2;
      let distance = Math.abs(containerCenterY - centerY);
      const newScale = clamp(1 - distance / containerHeight, 0.5, 1);

      //element.style.maxHeight = MAX_SIZE * newScale + 'px';
      //element.style.maxWidth = MAX_SIZE * newScale + 'px';
      element.style.transform = `scale(${newScale})`;
      element.style.opacity = newScale.toString();
    });
  };

  return (
    <GalleryWrapper {...props}>
      <ScrollContainer ref={containerRef} onScroll={onScroll}>
        <ImageColumn>
          <VerticalPadding />
          {IMAGE_SRC.map((src, i) => (
            <ImageWrapper
              key={src}
              ref={(ref) => ref && (imageRefs.current[i] = ref)}
              $alignLeft={i % 2 === 0}
              $isFirstChild={i === 0}
            >
              <StyledImage
                src={src}
                $alignLeft={i % 2 === 0}
                onLoad={onScroll}
              />
            </ImageWrapper>
          ))}
          <VerticalPadding />
        </ImageColumn>
      </ScrollContainer>
    </GalleryWrapper>
  );
};

const GalleryWrapper = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.background};
`;

const ScrollContainer = styled.div`
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  display: flex; // This is needed
  justify-content: center;
`;

const ImageColumn = styled.div`
  width: 100%;
  width: min(calc(200vh), calc(100%));
  display: flex;
  flex-direction: column;
`;

const VerticalPadding = styled.div`
  height: 50%;
  width: 100%;
  flex-shrink: 0;
  pointer-events: none;
`;

const ImageWrapper = styled.div<{
  $alignLeft: boolean;
  $isFirstChild: boolean;
}>`
  position: relative;
  box-sizing: border-box;
  width: 50%;

  &::before {
    float: left;
    padding-top: 100%;
    content: '';
  }

  &::after {
    display: block;
    content: '';
    clear: both;
  }

  flex-shrink: 0;
  align-self: ${({ $alignLeft }) => ($alignLeft ? 'flex-start' : 'flex-end')};
  transform-origin: ${({ $alignLeft }) => ($alignLeft ? 'right' : 'left')};
  margin-bottom: -25%;
  ${({ $isFirstChild }) => $isFirstChild && `margin-top: -25%;`}
  background-color: grey;
  border: 2px solid red;
`;

const StyledImage = styled(IImage)<{ $alignLeft: boolean }>`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: ${({ $alignLeft }) => ($alignLeft ? 'right' : 'left')};
`;
