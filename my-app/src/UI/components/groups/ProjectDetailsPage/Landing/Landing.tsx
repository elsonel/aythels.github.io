import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components';
import useOnWindowScroll from '../../../../utility/hooks/useOnWindowScroll';
import { GreaterThan } from '../../../../utility/styles/ResponsiveCSS';
import { IconScroll } from '../../../atoms/IconScroll/IconScroll';
import { Image } from '../../../atoms/Image/Image';
import { FadeIn } from '../../../other/FadeIn/FadeIn';
import { Paragraph } from '../../../text/Paragraph/Paragraph';
import { LinkWithUnderline } from '../../../inputs/LinkWithUnderline/LinkWithUnderline';
import { IfTouchScreen } from '../../../../utility/styles/DetectTouchScreenCSS';
import { FixedStickyScroll } from '../../../other/FixedStickyScroll';
import { FixedScrollFade } from '../../../other/FixedScrollFade/FixedScrollFade';
import { ScrollBlock } from '../../../other/ScrollBlock/ScrollBlock';
import { Title } from '../Title/Title';
import { FrameLayoutHorizontal } from '../../../layout/FrameLayoutHorizontal/FrameLayoutHorizontal';

export interface LandingProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle: string;
  prototypeHref?: string;
  imageSrc: string;
  imageSrcSet?: string;
  scrollLength?: number;
}

export const Landing: React.FC<LandingProps> = ({
  title,
  subtitle,
  prototypeHref,
  imageSrc,
  imageSrcSet,
  scrollLength = 600,
  ...props
}): React.ReactElement => {
  const { color, speed, size } = useTheme();
  const [isVisible, setIsVisible] = useState(true);
  const IMAGE_OFFSET = scrollLength / 8;

  const titleDelay = speed.stagger * 1;
  const prototypeDelay = speed.stagger * 2;
  const subtitleDelay = speed.stagger * 3;
  const iconDelay = speed.stagger * 4;

  useOnWindowScroll((scrollY: number) => {
    if (scrollY >= scrollLength) setIsVisible(false);
    else setIsVisible(true);
  });

  return (
    <>
      <ScrollBlock scrollLength={scrollLength} />
      <Overlay $isVisible={isVisible} {...props}>
        <OverlayContent $isVisible={isVisible}>
          <FixedScrollFade
            scrollStart={0}
            scrollDuration={1000}
            finalOffsetY={-IMAGE_OFFSET}
            initialOpacity={1}
            finalOpacity={1}
          >
            <ImageWrapper $offset={IMAGE_OFFSET}>
              <LandingImage alt={title} src={imageSrc} srcSet={imageSrcSet} />
            </ImageWrapper>
          </FixedScrollFade>
          <LandingTextWrapper>
            {prototypeHref && (
              <FixedScrollFade
                scrollStart={0}
                scrollDuration={200}
                finalOffsetY={-100}
              >
                <FadeIn delay={prototypeDelay}>
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
              <FadeIn offset={30} delay={titleDelay}>
                <FrameLayoutHorizontal>
                  <Title color={isVisible ? color.background : color.text}>
                    {title}
                  </Title>
                </FrameLayoutHorizontal>
              </FadeIn>
            </FixedStickyScroll>
            <FixedScrollFade
              scrollStart={0}
              scrollDuration={200}
              finalOffsetY={-100}
            >
              <FadeIn delay={subtitleDelay}>
                <Subtitle>{subtitle}</Subtitle>
              </FadeIn>
            </FixedScrollFade>
            <IconTopGap />
            <FixedScrollFade
              scrollStart={0}
              scrollDuration={200}
              finalOffsetY={0}
            >
              <FadeIn delay={iconDelay}>
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
  width: 100%;
  height: 100vh;
  pointer-events: ${({ $isVisible }) => ($isVisible ? 'auto' : 'none')};
  background-color: ${({ $isVisible, theme }) =>
    $isVisible ? theme.color.background : 'transparent'};
`;

const OverlayContent = styled.div<{ $isVisible: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;

  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: ${({ theme }) => theme.speed.slow}ms;
`;

const ImageWrapper = styled.div<{ $offset: number }>`
  width: 100%;
  height: calc(100vh + ${({ $offset }) => $offset}px);
  transition: ${({ theme }) => theme.speed.instant}ms;
  transition-timing-function: linear;

  ${IfTouchScreen(`
    height: 100vh;
    transform: none !important;
  `)}
`;

const LandingImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const LandingTextWrapper = styled.div`
  position: absolute;
  left: 0px;
  bottom: 0px;
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
  color: ${({ theme }) => theme.color.background};
  overflow-wrap: normal;
  ${({ theme }) =>
    GreaterThan(0, `font-size: ${theme.font.default.size.default};`) +
    GreaterThan(800, `font-size: ${theme.font.default.size.large};`)}
`;

const Subtitle = styled(Text)`
  position: relative;
  top: -10px;
`;

const LinkWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const LinkText = styled(Text)`
  font-weight: ${({ theme }) => theme.font.default.weight.medium};
  letter-spacing: ${({ theme }) => theme.font.default.letterSpacing.button};
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
