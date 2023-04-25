import React, { useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import { ImageCard } from '../../../atoms/ImageCard/ImageCard';
import { GreaterThan } from '../../../../utilities/styles/ResponsiveCSS';
import { GalleryModal } from '../../GalleryModal/GalleryModal';
import { ImageProps } from '../../../atoms/Image/Image';
import { FadeIn } from '../../../other/FadeIn/FadeIn';
import { InView } from 'react-intersection-observer';
import { Paragraph } from '../../../text/Paragraph/Paragraph';

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

  // On load
  useEffect(() => {
    if (isImagesLoaded) onAllImagesLoad && onAllImagesLoad();
  }, [isImagesLoaded, onAllImagesLoad]);

  const imagesFlat = useMemo(() => images.flat(), [images]);

  // Preload images
  useEffect(() => {
    setIsImagesLoaded(false);

    const imagesFlat = images.flat();
    const preloadedImages: HTMLImageElement[] = [];

    imagesFlat.forEach((data) => {
      const img = new Image();
      Object.assign(img, data);

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
      row.map((data) => {
        const indexCounterCopy = indexCounter.valueOf();

        const component = (
          <ImageCard
            key={data.src}
            imageProps={data}
            onClick={() => {
              modalImageIndex.current = indexCounterCopy;
              setIsModalOpen(true);
            }}
          />
        );

        indexCounter += 1;

        return {
          component: component,
          src: data.src,
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
        images={imagesFlat}
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
  width: min(100%, 1200px);
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
