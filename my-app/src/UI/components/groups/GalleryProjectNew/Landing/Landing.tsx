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
  }, [isVisible]);

  useOnWindowScroll((scrollY: number) => {
    if (scrollY > 800) setIsVisible(false);
    else setIsVisible(true);
    scrollYRef.current = scrollY;

    if (!ref.current) return;

    const clampedScrollY = clamp(scrollY, 0, 800);
    const finalOffsetY = remap(clampedScrollY, 0, 800, 0, -200);
    ref.current.style.transform = `translateY(${finalOffsetY}px)`;
  });

  const ref = useRef<HTMLDivElement>(null);

  return (
    <Wrapper $isVisible={isVisible} {...props}>
      <Content>
        <ImageWrapper ref={ref}>
          <LandingImage alt={title} src={imageSrc} srcSet={imageSrcSet} />
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
          <FixedScrollFadeOut startY={50} duration={200} offsetY={100}>
            <FadeIn offset={30} delay={0}>
              <Title>{title}</Title>
            </FadeIn>
          </FixedScrollFadeOut>
          <FixedScrollFadeOut startY={150} duration={200} offsetY={100}>
            <FadeIn delay={500}>
              <Subtitle>{subtitle}</Subtitle>
            </FadeIn>
          </FixedScrollFadeOut>
          <FixedScrollFadeOut startY={150} duration={200} offsetY={0}>
            <FadeIn delay={700}>
              <Icon />
            </FadeIn>
          </FixedScrollFadeOut>
        </LandingTitleWrapper>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ $isVisible: boolean }>`
  position: fixed;
  top: 0px;
  left: 0px;
  overflow: hidden;
  width: 100%;
  height: 100vh;

  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  pointer-events: ${({ $isVisible }) => ($isVisible ? 'auto' : 'none')};
  transition: ${({ theme }) => theme.speed.normal}ms;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: calc(100% + 200px);
  transition: ${({ theme }) => theme.speed.instant}ms;
  transition-timing-function: linear;

  ${IfTouchScreen(`
    height: 100%;
    transform: none !important;
  `)}
`;

const LandingImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const LandingTitleWrapper = styled.div`
  box-sizing: border-box;
  position: absolute;
  left: 0px;
  bottom: 0px;
  width: 100%;
  padding: 30px 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;
`;

const Title = styled(Paragraph)`
  text-align: center;
  color: ${({ theme }) => theme.color.background};
  font-family: ${({ theme }) => theme.font.title.family};
  font-weight: ${({ theme }) => theme.font.title.weight.bold};
  ${GreaterThan(0, `font-size: 2.8rem; margin-top: 16px; margin-bottom: 12px;`)}
  ${GreaterThan(500, `font-size: 9vw; margin-top: 16px; margin-bottom: 12px;`)}
  ${GreaterThan(1000, `margin: 0px; margin-top: 6px;`)}
  overflow-wrap: normal;
`;

const Subtitle = styled(Paragraph)`
  text-align: center;
  color: ${({ theme }) => theme.color.background};
  ${({ theme }) =>
    GreaterThan(0, `font-size: ${theme.font.default.size.large};`) +
    GreaterThan(900, `font-size: ${theme.font.default.size.h6};`)}
  overflow-wrap: normal;
`;

const LinkText = styled(Subtitle)`
  letter-spacing: ${({ theme }) => theme.font.default.letterSpacing.button};
`;

const Icon = styled(IconScroll)`
  width: 48px;
  height: 48px;
  margin-top: 60px;
`;
