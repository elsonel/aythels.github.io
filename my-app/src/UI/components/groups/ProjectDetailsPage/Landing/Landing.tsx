import React, { useLayoutEffect, useMemo, useState } from 'react';
import styled, { useTheme } from 'styled-components';
import useOnWindowScroll from '../../../../utilities/hooks/useOnWindowScroll';
import { GreaterThan } from '../../../../utilities/styles/ResponsiveCSS';
import { IconScroll } from '../../../atoms/IconScroll/IconScroll';
import { Image, ImageProps } from '../../../atoms/Image/Image';
import { FadeIn } from '../../../other/FadeIn/FadeIn';
import { Paragraph } from '../../../text/Paragraph/Paragraph';
import { LinkWithUnderline } from '../../../inputs/LinkWithUnderline/LinkWithUnderline';
import { IfTouchScreen } from '../../../../utilities/styles/DetectTouchScreenCSS';
import { FixedStickyScroll } from '../../../other/FixedStickyScroll';
import { FixedScrollFade } from '../../../other/FixedScrollFade/FixedScrollFade';
import { ScrollBlock } from '../../../other/ScrollBlock/ScrollBlock';
import { Title } from '../Title/Title';
import { FrameLayoutHorizontal } from '../../../layout/FrameLayoutHorizontal/FrameLayoutHorizontal';
import { GlobalScrollHidden } from '../../../../utilities/styles/GlobalStyles';

export const LANDING_SCROLL_LENGTH = 600;

export interface LandingProps extends React.HTMLAttributes<HTMLDivElement> {
  isTextLoaded?: boolean;
  title: string;
  subtitle: string;
  prototypeHref?: string;
  image: ImageProps;
  imageFit?: 'contain' | 'cover';
  imageBackgroundColor?: string;
  scrollLength?: number;
  onImageLoad?: (isSuccessful: boolean) => void;
}

export const Landing: React.FC<LandingProps> = ({
  isTextLoaded = true,
  title,
  subtitle,
  prototypeHref,
  image,
  imageFit = 'cover',
  imageBackgroundColor = 'white',
  scrollLength = LANDING_SCROLL_LENGTH,
  onImageLoad,
  ...props
}): React.ReactElement => {
  const { color, speed, size } = useTheme();
  const [isVisible, setIsVisible] = useState(true);
  const IMAGE_OFFSET = scrollLength / 4;

  const titleDelay = speed.stagger * 1;
  const prototypeDelay = speed.stagger * 2;
  const subtitleDelay = speed.stagger * 3;
  const iconDelay = speed.stagger * 4;

  useOnWindowScroll((scrollY: number) => {
    if (scrollY >= scrollLength) setIsVisible(false);
    else setIsVisible(true);
  });

  const isScrollbarShown = useMemo(
    () => isVisible && <GlobalScrollHidden />,
    [isVisible]
  );

  return (
    <>
      {isScrollbarShown}
      <ScrollBlock scrollLength={scrollLength} />
      <Overlay $isVisible={isVisible} {...props}>
        <OverlayContent $isVisible={isVisible}>
          <ImageFixedScrollFade
            scrollStart={0}
            scrollDuration={1000}
            finalOffsetY={-IMAGE_OFFSET}
            initialOpacity={1}
            finalOpacity={1}
            initialBrightness={0.3}
            finalBrightness={1}
          >
            <ImageWrapper
              $offset={IMAGE_OFFSET}
              $backgroundColor={imageBackgroundColor}
            >
              <LandingImage
                {...image}
                sizes="100vw"
                $imageFit={imageFit}
                onLoad={(e) => {
                  image.onLoad && image.onLoad(e);
                  onImageLoad && onImageLoad(true);
                }}
                onError={(e) => {
                  image.onError && image.onError(e);
                  onImageLoad && onImageLoad(false);
                }}
              />
            </ImageWrapper>
          </ImageFixedScrollFade>
          <LandingTextWrapper>
            {prototypeHref && (
              <FixedScrollFade
                scrollStart={0}
                scrollDuration={200}
                finalOffsetY={-100}
              >
                <FadeIn delay={prototypeDelay} isLoaded={isTextLoaded}>
                  <LinkWrapper>
                    <LinkWithUnderline
                      linkProps={{
                        href: prototypeHref,
                      }}
                      color={color.background}
                    >
                      <LinkText>PROTOTYPE</LinkText>
                    </LinkWithUnderline>
                  </LinkWrapper>
                </FadeIn>
              </FixedScrollFade>
            )}
            <FixedStickyScroll
              scrollSpeed={window.innerHeight / scrollLength}
              topLimit={size.headerHeight}
            >
              <FadeIn offset={30} delay={titleDelay} isLoaded={isTextLoaded}>
                <TitleWrapper $isVisible={isVisible}>
                  <Title color={color.background}>{title}</Title>
                </TitleWrapper>
              </FadeIn>
            </FixedStickyScroll>
            <FixedScrollFade
              scrollStart={0}
              scrollDuration={200}
              finalOffsetY={-100}
            >
              <FadeIn delay={subtitleDelay} isLoaded={isTextLoaded}>
                <Subtitle>{subtitle}</Subtitle>
              </FadeIn>
            </FixedScrollFade>
            <IconTopGap />
            <FixedScrollFade
              scrollStart={0}
              scrollDuration={200}
              finalOffsetY={0}
            >
              <FadeIn delay={iconDelay} isLoaded={isTextLoaded}>
                <Icon />
              </FadeIn>
            </FixedScrollFade>
          </LandingTextWrapper>
        </OverlayContent>
      </Overlay>
    </>
  );
};

const Overlay = styled.div<{ $isVisible: boolean }>`
  overflow: hidden;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  pointer-events: ${({ $isVisible }) => ($isVisible ? 'auto' : 'none')};
  background-color: ${({ $isVisible, theme }) =>
    $isVisible ? theme.color.backgroundOpposite : 'transparent'};
  z-index: ${({ theme }) => theme.layer.landing};
`;

const OverlayContent = styled.div<{ $isVisible: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;

  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: ${({ theme }) => theme.speed.slow}ms;
`;

const ImageFixedScrollFade = styled(FixedScrollFade)`
  width: 100%;
  height: 100%;
  ${IfTouchScreen(`transform: none !important;`)}
`;

const ImageWrapper = styled.div<{
  $offset: number;
  $backgroundColor: string;
}>`
  width: 100%;
  height: calc(100% + ${({ $offset }) => $offset}px);
  transition: ${({ theme }) => theme.speed.instant}ms;
  transition-timing-function: linear;

  ${IfTouchScreen(`height: 100%;`)}

  background-color: ${({ $backgroundColor }) => $backgroundColor};
`;

const LandingImage = styled(Image)<{ $imageFit: 'contain' | 'cover' }>`
  width: 100%;
  height: 100%;
  object-fit: ${({ $imageFit }) => $imageFit};
`;

const LandingTextWrapper = styled.div`
  position: absolute;
  left: 0px;
  bottom: calc(100lvh - 100svh);
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;

  margin-bottom: 30px; // bottom border padding
`;

const Text = styled(Paragraph)`
  text-align: center;
  overflow-wrap: normal;
  color: ${({ theme }) => theme.color.background};
`;

const Subtitle = styled(Text)`
  position: relative;
  top: -10px;
  ${({ theme }) =>
    GreaterThan(0, `font-size: ${theme.font.default.size.large};`) +
    GreaterThan(800, `font-size: ${theme.font.default.size.h6};`)}
`;

const LinkWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const LinkText = styled(Text)`
  font-weight: ${({ theme }) => theme.font.default.weight.medium};
  letter-spacing: ${({ theme }) => theme.font.default.letterSpacing.button};
  ${({ theme }) =>
    GreaterThan(0, `font-size: ${theme.font.default.size.default};`) +
    GreaterThan(800, `font-size: ${theme.font.default.size.large};`)}
`;

const IconTopGap = styled.div`
  flex-shrink: 0;
  width: 100%;

  ${GreaterThan(0, `height: 40px;`)}
  ${GreaterThan(800, `height: 50px;`)}
`;

const Icon = styled(IconScroll)`
  width: 44px;
  height: 44px;
  margin-left: auto;
  margin-right: auto;
`;

const TitleWrapper = styled(FrameLayoutHorizontal)<{ $isVisible: boolean }>`
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
`;
