import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import styled, { useTheme } from 'styled-components';
import useOnWindowResizeSize from '../../../../utilities/hooks/useOnWindowResizeSize';
import useOnWindowScroll from '../../../../utilities/hooks/useOnWindowScroll';
import { GreaterThan } from '../../../../utilities/styles/ResponsiveCSS';
import { FrameLayout } from '../../../layout/FrameLayout/FrameLayout';
import { FadeIn } from '../../../other/FadeIn/FadeIn';
import { FixedScrollFade } from '../../../other/FixedScrollFade/FixedScrollFade';
import { ScrollBlock } from '../../../other/ScrollBlock/ScrollBlock';
import { BodyText } from '../BodyText/BodyText';
import { Divider } from '../Divider/Divider';
import { FactData, FactsList } from '../FactsList/FactsList';
import { Title } from '../Title/Title';
import { ImageProps } from '../../../atoms/Image/Image';
import { GreaterThanHook } from '../../../../utilities/hooks/ResponsiveProps';
import { Gallery } from '../Gallery/Gallery';

const STATIONARY_LENGTH = 600;

function getScrollBlockHeight(contentHeight: number) {
  const contentScrollHeight = Math.max(0, contentHeight - window.innerHeight);
  return STATIONARY_LENGTH + contentScrollHeight;
}

export type ParagraphData = { title?: string; body: string };

export interface IBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  scrollStart?: number;
  title: string;
  facts: FactData[];
  paragraphs: ParagraphData[];
  imagesDesktop?: ImageProps[][];
  imagesMobile?: ImageProps[][];
  onAssetsLoad?: () => void;
}

export const Body: React.FC<IBodyProps> = ({
  scrollStart = 0,
  title,
  facts,
  paragraphs,
  imagesDesktop,
  imagesMobile,
  onAssetsLoad,
  ...props
}): React.ReactElement => {
  const { speed, color, breakpoint } = useTheme();
  const stagger = speed.stagger;
  const [isLoaded, setIsLoaded] = useState(false);
  const [height, setHeight] = useState(0);
  const isDesktop = GreaterThanHook(breakpoint.gallery);
  const ref = useRef<HTMLDivElement>(null);

  const onResize = useCallback(() => {
    if (!ref.current) return;
    const height = ref.current.getBoundingClientRect().height;
    setHeight(height);
  }, []);

  const onScroll = useCallback(
    (scrollY: number) => {
      if (scrollY >= scrollStart) setIsLoaded(true);
      else setIsLoaded(false);
    },
    [scrollStart]
  );

  const onModuleAssetsLoad = useCallback(() => {
    onResize();
    onAssetsLoad && onAssetsLoad();
  }, [onAssetsLoad, onResize]);

  useOnWindowResizeSize(onResize);
  useOnWindowScroll(onScroll);

  const factsDelay = stagger * 1;
  const paragraphDelay = stagger * 2;
  const galleryDelay = stagger * 3;

  const images = useMemo(() => {
    if (isDesktop && imagesDesktop) return imagesDesktop;
    if (!isDesktop && imagesMobile) return imagesMobile;

    if (imagesDesktop) return imagesDesktop;
    if (imagesMobile) return imagesMobile;
  }, [imagesDesktop, imagesMobile, isDesktop]);

  return (
    <>
      <ScrollBlock scrollLength={getScrollBlockHeight(height)} />
      <Wrapper ref={ref} {...props}>
        <FrameLayout>
          <FixedScrollFade
            scrollStart={scrollStart + STATIONARY_LENGTH}
            scrollDuration={height}
            finalOffsetY={-height}
            initialOpacity={1}
            finalOpacity={1}
          >
            <Title
              onReady={onResize}
              color={isLoaded ? color.text : color.background}
            >
              {title}
            </Title>
            <Divider isLoaded={isLoaded} delay={factsDelay} />
            <FadeIn isLoaded={isLoaded} delay={factsDelay}>
              <FactsList facts={facts} />
            </FadeIn>
            <Divider isLoaded={isLoaded} delay={paragraphDelay} />
            <BodyLayout>
              {paragraphs.map((p, i) => (
                <FadeIn
                  key={i}
                  isLoaded={isLoaded}
                  delay={paragraphDelay + stagger * i}
                >
                  <BodyText title={p.title}>{p.body}</BodyText>
                </FadeIn>
              ))}
            </BodyLayout>
            <Divider isLoaded={isLoaded} delay={galleryDelay} />
            <FadeIn isLoaded={isLoaded} delay={galleryDelay}>
              {images && (
                <Gallery images={images} onAllImagesLoad={onModuleAssetsLoad} />
              )}
            </FadeIn>
          </FixedScrollFade>
        </FrameLayout>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  top: 0px;
  left: 0px;
`;

const BodyLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  ${GreaterThan(0, `gap: 50px; padding: 30px 0px;`)}
  ${GreaterThan(800, `gap: 80px; padding: 80px 0px;`)}
`;
