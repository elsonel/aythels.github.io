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
import { BodyWide } from '../../../layout/BodyWide/BodyWide';
import { Title } from '../Title/Title';
import { FixedScrollFade } from '../../../other/FixedScrollFade/FixedScrollFade';
import { ScrollBlock } from '../../../other/ScrollBlock/ScrollBlock';

const IMAGE_OFFSET = 200;

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
  scrollLength = 1000,
  ...props
}): React.ReactElement => {
  const [isVisible, setIsVisible] = useState(true);
  const { color } = useTheme();

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
            scrollDuration={400}
            finalOffsetY={-IMAGE_OFFSET}
            initialOpacity={1}
            finalOpacity={1}
          >
            <ImageWrapper>
              <LandingImage alt={title} src={imageSrc} srcSet={imageSrcSet} />
            </ImageWrapper>
          </FixedScrollFade>
          <LandingTitleWrapper>
            {prototypeHref && (
              <FixedScrollFade
                scrollStart={0}
                scrollDuration={200}
                finalOffsetY={-100}
              >
                <FadeIn delay={300}>
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
            <TitleTopGap />
            <FixedStickyScroll scrollSpeed={window.innerHeight / scrollLength}>
              <FadeIn offset={30} delay={0}>
                <StyledTitle color={isVisible ? color.background : color.text}>
                  {title}
                </StyledTitle>
              </FadeIn>
            </FixedStickyScroll>
            <TitleBottomGap />
            <FixedScrollFade
              scrollStart={0}
              scrollDuration={200}
              finalOffsetY={-100}
            >
              <FadeIn delay={500}>
                <Subtitle>{subtitle}</Subtitle>
              </FadeIn>
            </FixedScrollFade>
            <IconTopGap />
            <FixedScrollFade
              scrollStart={0}
              scrollDuration={200}
              finalOffsetY={0}
            >
              <FadeIn delay={700}>
                <Icon />
              </FadeIn>
            </FixedScrollFade>
          </LandingTitleWrapper>
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

const ImageWrapper = styled.div`
  width: 100%;
  height: calc(100vh + ${IMAGE_OFFSET}px);
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

const LandingTitleWrapper = styled(BodyWide)`
  box-sizing: border-box;
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

const TitleTopGap = styled.div`
  flex-shrink: 0;
  width: 100%;
  ${GreaterThan(0, `height: 0px;`)}
  ${GreaterThan(1000, `height: 12px;`)}
`;

const StyledTitle = styled(Title)`
  padding-top: 30px; // top border padding
`;

const TitleBottomGap = styled.div`
  flex-shrink: 0;
  width: 100%;
  ${GreaterThan(0, `height: 24px;`)}
  ${GreaterThan(1000, `height: 30px;`)}
`;

const Subtitle = styled(Paragraph)`
  text-align: center;
  color: ${({ theme }) => theme.color.background};
  ${({ theme }) =>
    GreaterThan(0, `font-size: ${theme.font.default.size.default};`) +
    GreaterThan(600, `font-size: ${theme.font.default.size.large};`)}
  overflow-wrap: normal;
`;

const LinkText = styled(Subtitle)`
  font-weight: ${({ theme }) => theme.font.default.weight.medium};
  letter-spacing: ${({ theme }) => theme.font.default.letterSpacing.button};
`;

const LinkWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const IconTopGap = styled.div`
  flex-shrink: 0;
  width: 100%;

  ${GreaterThan(0, `height: 60px;`)}
  ${GreaterThan(600, `height: 80px;`)}
`;

const Icon = styled(IconScroll)`
  width: 48px;
  height: 48px;
  margin-left: auto;
  margin-right: auto;
`;
