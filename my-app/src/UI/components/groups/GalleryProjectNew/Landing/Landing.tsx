import React, { useEffect, useState, useRef } from 'react';
import styled, { useTheme } from 'styled-components';
import useOnWindowScroll from '../../../../utility/hooks/useOnWindowScroll';
import { GreaterThan } from '../../../../utility/styles/ResponsiveCSS';
import { IconScroll } from '../../../atoms/IconScroll/IconScroll';
import { Image } from '../../../atoms/Image/Image';
import { FadeIn } from '../../../other/FadeIn/FadeIn';
import { Paragraph } from '../../../text/Paragraph/Paragraph';
import { LinkWithUnderline } from '../../../inputs/LinkWithUnderline/LinkWithUnderline';
import { remap } from '../../../../utility/scripts/remap';
import { clamp } from '../../../../utility/scripts/Math';
import { IfTouchScreen } from '../../../../utility/styles/DetectTouchScreenCSS';
import { Textfit } from 'react-textfit';
import { FixedStickyScroll } from '../../../other/FixedStickyScroll';
import { BodyWide } from '../../../layout/BodyWide/BodyWide';
import { Title } from '../Title/Title';
import { FixedScrollFade } from '../../../other/FixedScrollFade/FixedScrollFade';
import useOnWindowResize from '../../../../utility/hooks/useOnWindowResize';

const IMAGE_OFFSET = 200;

export interface LandingProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle: string;
  prototypeHref?: string;
  imageSrc: string;
  imageSrcSet?: string;
  scrollLength?: number;
  onVisibilityChange?: (isVisible: boolean, scrollY: number) => void;
}

export const Landing: React.FC<LandingProps> = ({
  title,
  subtitle,
  prototypeHref,
  imageSrc,
  imageSrcSet,
  scrollLength = 1000,
  onVisibilityChange,
  ...props
}): React.ReactElement => {
  const scrollYRef = useRef(0);
  const [isVisible, setIsVisible] = useState(true);
  const { color } = useTheme();

  useEffect(() => {
    onVisibilityChange && onVisibilityChange(isVisible, scrollYRef.current);
  }, [isVisible, onVisibilityChange]);

  useOnWindowScroll((scrollY: number) => {
    if (scrollY > scrollLength) setIsVisible(false);
    else setIsVisible(true);
    scrollYRef.current = scrollY;

    if (!ref.current) return;

    const clampedScrollY = clamp(scrollY, 0, scrollLength);
    const finalOffsetY = remap(
      clampedScrollY,
      0,
      scrollLength,
      0,
      -IMAGE_OFFSET
    );
    ref.current.style.transform = `translateY(${finalOffsetY}px)`;
  });

  const ref = useRef<HTMLDivElement>(null);
  return (
    <Wrapper {...props}>
      <Content>
        <ImageWrapper ref={ref}>
          <LandingImage
            $isVisible={isVisible}
            alt={title}
            src={imageSrc}
            srcSet={imageSrcSet}
          />
        </ImageWrapper>

        <LandingTitleWrapper>
          {prototypeHref && (
            <FixedScrollFade startY={0} duration={200} offsetY={100}>
              <FadeIn delay={300}>
                <LinkWrapper>
                  <LinkWithUnderline
                    href={prototypeHref}
                    color={color.background}
                  >
                    <LinkText>PROTOTYPE</LinkText>
                  </LinkWithUnderline>
                </LinkWrapper>
              </FadeIn>
            </FixedScrollFade>
          )}
          <FixedStickyScroll scrollSpeed={0.5}>
            <FadeIn offset={30} delay={0}>
              <StyledTitle color={isVisible ? color.background : color.text}>
                {title}
              </StyledTitle>
            </FadeIn>
          </FixedStickyScroll>
          <FixedScrollFade startY={0} duration={200} offsetY={100}>
            <FadeIn delay={500}>
              <Subtitle>{subtitle}</Subtitle>
            </FadeIn>
          </FixedScrollFade>
          <FixedScrollFade startY={200} duration={200} offsetY={0}>
            <FadeIn delay={700}>
              <Icon />
            </FadeIn>
          </FixedScrollFade>
        </LandingTitleWrapper>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  pointer-events: none;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: calc(100% + ${IMAGE_OFFSET}px);
  transition: ${({ theme }) => theme.speed.instant}ms;
  transition-timing-function: linear;

  ${IfTouchScreen(`
    height: 100%;
    transform: none !important;
  `)}
`;

const LandingImage = styled(Image)<{ $isVisible: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;

  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: ${({ theme }) => theme.speed.slow}ms;
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
`;

const StyledTitle = styled(Title)`
  padding-top: 40px; // top border padding
  ${GreaterThan(0, `margin-top: 0px; margin-bottom: 20px;`)}
  ${GreaterThan(1000, `margin-top: 12px; margin-bottom: 30px;`)}
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
  letter-spacing: ${({ theme }) => theme.font.default.letterSpacing.button};
`;

const LinkWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Icon = styled(IconScroll)`
  width: 48px;
  height: 48px;
  margin: auto;
  margin-top: 80px;
  margin-bottom: 40px; // bottom border padding
`;
