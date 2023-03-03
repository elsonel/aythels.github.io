import React, { useEffect, useState, useRef } from 'react';
import styled, { useTheme } from 'styled-components';
import useOnWindowScroll from '../../../../utility/hooks/useOnWindowScroll';
import { GreaterThan } from '../../../../utility/styles/ResponsiveCSS';
import { IconScroll } from '../../../atoms/IconScroll/IconScroll';
import { Image } from '../../../atoms/Image/Image';
import { FadeIn } from '../../../other/FadeIn/FadeIn';
import { Paragraph } from '../../../text/Paragraph/Paragraph';
import { LinkWithUnderline } from '../../../inputs/LinkWithUnderline/LinkWithUnderline';
import { FixedScrollFadeOut } from '../../../other/FixedScrollFadeOut/FixedScrollFadeOut';
import { remap } from '../../../../utility/scripts/remap';
import { clamp } from '../../../../utility/scripts/Math';
import { IfTouchScreen } from '../../../../utility/styles/DetectTouchScreenCSS';
import { Textfit } from 'react-textfit';
import { FixedStickyScroll } from '../../../other/FixedStickyScroll';

const SCROLL_BEFORE_DISAPPEAR = 1000;
const IMAGE_OFFSET = 200;

export interface LandingProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle: string;
  prototypeHref?: string;
  imageSrc: string;
  imageSrcSet?: string;
  onVisibilityChange?: (isVisible: boolean, scrollY: number) => void;
}

export const Landing: React.FC<LandingProps> = ({
  title,
  subtitle,
  prototypeHref,
  imageSrc,
  imageSrcSet,
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
    if (scrollY > SCROLL_BEFORE_DISAPPEAR) setIsVisible(false);
    else setIsVisible(true);
    scrollYRef.current = scrollY;

    if (!ref.current) return;

    const clampedScrollY = clamp(scrollY, 0, SCROLL_BEFORE_DISAPPEAR);
    const finalOffsetY = remap(
      clampedScrollY,
      0,
      SCROLL_BEFORE_DISAPPEAR,
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
            <FixedScrollFadeOut startY={0} duration={200} offsetY={100}>
              <FadeIn delay={300}>
                <LinkWithUnderline
                  href={prototypeHref}
                  color={color.background}
                >
                  <LinkText>PROTOTYPE</LinkText>
                </LinkWithUnderline>
              </FadeIn>
            </FixedScrollFadeOut>
          )}
          <FixedStickyScroll scrollSpeed={0.5} isFullWidth>
            <FadeIn offset={30} delay={0} isFullWidth>
              <StyledTextFit
                mode="single"
                forceSingleModeWidth
                min={24}
                max={1000}
              >
                <Title $isVisible={isVisible}>{title}</Title>
              </StyledTextFit>
            </FadeIn>
          </FixedStickyScroll>
          <FixedScrollFadeOut startY={0} duration={200} offsetY={100}>
            <FadeIn delay={500}>
              <Subtitle>{subtitle}</Subtitle>
            </FadeIn>
          </FixedScrollFadeOut>
          <FixedScrollFadeOut startY={200} duration={200} offsetY={0}>
            <FadeIn delay={700}>
              <Icon />
            </FadeIn>
          </FixedScrollFadeOut>
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

const LandingTitleWrapper = styled.div`
  box-sizing: border-box;
  position: absolute;
  left: 0px;
  bottom: 0px;
  width: 100%;
  ${GreaterThan(0, `padding: 20px max(6vw, 20px);`)}
  ${GreaterThan(600, `padding: 30px max(6vw, 30px);`)}

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;
`;

const StyledTextFit = styled(Textfit)`
  width: 100%;
  display: flex;
  justify-content: center;

  ${GreaterThan(0, `margin-top: 26px; margin-bottom: 20px;`)}
  ${GreaterThan(1000, `margin-bottom: 30px; margin-top: 40px;`)}
`;

const Title = styled(Paragraph)<{ $isVisible: boolean }>`
  text-align: center;
  font-size: inherit;
  color: ${({ theme, $isVisible }) =>
    $isVisible ? theme.color.background : theme.color.text};
  font-family: ${({ theme }) => theme.font.title.family};
  line-height: 1;
  overflow-wrap: normal;
  transition: ${({ theme }) => theme.speed.slow}ms;
  transition-property: color;
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

const Icon = styled(IconScroll)`
  width: 48px;
  height: 48px;
  margin-top: 80px;
`;
