import React, { useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import { ImageCard } from '../../../atoms/ImageCard/ImageCard';
import { GreaterThan } from '../../../../utilities/styles/ResponsiveCSS';
import { GalleryModal } from '../../GalleryModal/GalleryModal';
import { ImageProps } from '../../../atoms/Image/Image';
import { FadeIn } from '../../../other/FadeIn/FadeIn';
import { InView } from 'react-intersection-observer';
import { Paragraph } from '../../../text/Paragraph/Paragraph';

const IMAGE_SIZE_DIVISOR = 2;
const WIDTH = 1200;

const FADE_OFFSET = 30;
const TITLE_DELAY = 100;
const FADE_DELAY = 100;

export interface IGalleryProps extends React.HTMLAttributes<HTMLDivElement> {
  images: ImageProps[][];
  onAllImagesLoad?: () => void;
}

export const Gallery: React.FC<IGalleryProps> = ({
  images,
  onAllImagesLoad,
  ...props
}): React.ReactElement => {
  const [isImagesLoaded, setIsImagesLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalImageIndex = useRef<number>();

  const FlattenedImages = useMemo(() => images.flat(), [images]);

  // On load
  useEffect(() => {
    if (isImagesLoaded) onAllImagesLoad && onAllImagesLoad();
  }, [isImagesLoaded, onAllImagesLoad]);

  // Preload thumbnails
  useEffect(() => {
    setIsImagesLoaded(false);

    const imagesFlat = images.flat();
    const preloadedImages: HTMLImageElement[] = [];

    imagesFlat.forEach((image) => {
      const img = new Image();
      Object.assign(img, image);

      img.onload = () => {
        preloadedImages.push(img);
        if (preloadedImages.length === imagesFlat.length)
          setIsImagesLoaded(true);
      };

      img.onerror = () => {
        preloadedImages.push(img);
        if (preloadedImages.length === imagesFlat.length)
          setIsImagesLoaded(true);
      };
    });
  }, [images]);

  const imageCards = useMemo(() => {
    let indexCounter = 0;

    return images.map((row) =>
      row.map((image) => {
        const indexCounterCopy = indexCounter.valueOf();
        const imageSize = `
          (min-width: ${WIDTH}px) ${WIDTH}px / ${
          row.length * IMAGE_SIZE_DIVISOR
        }, 
          100vw / ${row.length * IMAGE_SIZE_DIVISOR}
        `;
        const thumbnailImage = {
          ...image,
          sizes: imageSize,
        };

        const component = (
          <ImageCard
            key={thumbnailImage.src}
            imageProps={thumbnailImage}
            onClick={() => {
              modalImageIndex.current = indexCounterCopy;
              setIsModalOpen(true);
            }}
          />
        );

        indexCounter += 1;

        return {
          component: component,
          src: thumbnailImage.src,
        };
      })
    );
  }, [images]);

  const imagesRender = useMemo(
    () =>
      imageCards.map((row) => (
        <InView
          key={JSON.stringify(row.map((row) => row.src))}
          threshold={0.25}
          triggerOnce
        >
          {({ inView, ref }) => (
            <Row ref={ref}>
              {row.map((card, i) => (
                <StyledFadeIn
                  key={card.src}
                  delay={TITLE_DELAY + FADE_DELAY * i}
                  offset={FADE_OFFSET}
                  isLoaded={inView}
                >
                  {card.component}
                </StyledFadeIn>
              ))}
            </Row>
          )}
        </InView>
      )),
    [imageCards]
  );

  return (
    <>
      <Wrapper>
        <InView threshold={1} triggerOnce>
          {({ inView, ref }) => (
            <div ref={ref}>
              <StyledFadeIn isLoaded={inView}>
                <Title>GALLERY</Title>
              </StyledFadeIn>
            </div>
          )}
        </InView>
        <Layout {...props}>
          <Column>{isImagesLoaded && imagesRender}</Column>
        </Layout>
      </Wrapper>
      <GalleryModal
        images={FlattenedImages}
        initialIndex={modalImageIndex.current}
        onCloseClick={() => setIsModalOpen(false)}
        isVisible={isModalOpen}
      />
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const Title = styled(Paragraph).attrs(({ theme }) => ({
  font: theme.font.title,
  size: 'h2',
}))`
  text-align: center;
  overflow-wrap: normal;
  ${GreaterThan(0, `font-size: 1.5rem; margin: 30px 0px;`)}
  ${GreaterThan(500, `font-size: 2.2rem; margin: 30px 0px;`)} 
  ${GreaterThan(800, `font-size: 3rem; margin: 50px 0px;`)} 
  ${GreaterThan(1000, `font-size: 4rem; margin: 80px 0px;`)}
`;

const Layout = styled.div`
  box-sizing: border-box;
  width: min(100%, ${WIDTH}px);
  margin: auto;

  ${({ theme }) =>
    GreaterThan(
      0,
      `
        padding: 0px 20px; 
        padding-bottom: ${theme.size.headerHeight + 30}px;
      `
    ) +
    GreaterThan(
      theme.breakpoint.header,
      `
        padding: 0px 30px;
        padding-bottom: ${theme.size.headerHeight + 40}px;
      `
    )}
`;

const Column = styled.div`
  z-index: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  ${({ theme }) =>
    GreaterThan(0, `gap: ${theme.size.gapSmall}px;`) +
    GreaterThan(theme.breakpoint.header, `gap: ${theme.size.gap}px;`)}
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  ${({ theme }) =>
    GreaterThan(0, `gap: ${theme.size.gapSmall}px;`) +
    GreaterThan(theme.breakpoint.header, `gap: ${theme.size.gap}px;`)}
`;

const StyledFadeIn = styled(FadeIn)`
  &:hover {
    z-index: 1;
  }
`;
