import React, { useCallback, useRef, useState } from 'react';
import styled, { useTheme } from 'styled-components';
import useOnWindowResize from '../../../../utility/hooks/useOnWindowResize';
import useOnWindowScroll from '../../../../utility/hooks/useOnWindowScroll';
import { GreaterThan } from '../../../../utility/styles/ResponsiveCSS';
import { FrameLayout } from '../../../layout/FrameLayout/FrameLayout';
import { FadeIn } from '../../../other/FadeIn/FadeIn';
import { FixedScrollFade } from '../../../other/FixedScrollFade/FixedScrollFade';
import { ScrollBlock } from '../../../other/ScrollBlock/ScrollBlock';
import { BodyText } from '../BodyText/BodyText';
import { Divider } from '../Divider/Divider';
import { FactData, FactsList } from '../FactsList/FactsList';
import { Title } from '../Title/Title';

const STATIONARY_LENGTH = 600;

function getScrollBlockHeight(contentHeight: number) {
  const contentScrollHeight = Math.max(0, contentHeight - window.innerHeight);
  return STATIONARY_LENGTH + contentScrollHeight;
}

export type ParagraphData = { title?: string; body: string };

export interface IBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  facts: FactData[];
  paragraphs: ParagraphData[];
  scrollStart?: number;
}

export const Body: React.FC<IBodyProps> = ({
  title,
  facts,
  paragraphs,
  scrollStart = 0,
  ...props
}): React.ReactElement => {
  const { speed, color } = useTheme();
  const stagger = speed.stagger;
  const [isLoaded, setIsLoaded] = useState(scrollStart === 0);
  const [height, setHeight] = useState(0);

  const ref = useRef<HTMLDivElement>(null);

  const onWindowResize = useCallback(() => {
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

  useOnWindowResize(onWindowResize);
  useOnWindowScroll(onScroll);

  const factsDelay = stagger * 1;
  const paragraphDelay = stagger * 2;

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
              onReady={onWindowResize}
              color={isLoaded ? color.text : color.background}
            >
              {title}
            </Title>
            <Divider isLoaded={isLoaded} delay={factsDelay} />
            <FadeIn isLoaded={isLoaded} delay={factsDelay} offset={50}>
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
