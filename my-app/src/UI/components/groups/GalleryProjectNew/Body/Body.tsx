import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { GreaterThan } from '../../../../utility/styles/ResponsiveCSS';
import { BodyCenter } from '../../../layout/BodyCenter';
import { Paragraph } from '../../../text/Paragraph/Paragraph';
import { FactsList } from '../FactsList/FactsList';
import { Title } from '../Title/Title';
import { FixedScrollFade } from '../../../other/FixedScrollFade/FixedScrollFade';
import { BodyWide } from '../../../layout/BodyWide/BodyWide';
import useResizeObserver from '@react-hook/resize-observer';
import { ScrollBlock } from '../../../other/ScrollBlock/ScrollBlock';

const PRE_ANIMATION_DURATION = 200;
const ANIMATION_DURATION = 600;
const POST_ANIMATION_DURATION = 400;
const ADDITION =
  PRE_ANIMATION_DURATION + ANIMATION_DURATION + POST_ANIMATION_DURATION;

export interface BodyProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  facts: { label: string; value: string }[];
  paragraphs: { title?: string; body: string }[];
  scrollStart?: number;
}

export const Body: React.FC<BodyProps> = ({
  title,
  facts,
  paragraphs,
  scrollStart = 0,
  ...props
}): React.ReactElement => {
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  // Get container height
  useResizeObserver(ref, (entry) => {
    const height = entry.borderBoxSize[0].blockSize;
    setHeight(height);
  });

  // Get fade in props for body components
  const getScrollFadeProps = (index: number) => {
    const scrollDuration = ANIMATION_DURATION / (1 + paragraphs.length);
    const finalScrollStart =
      index * scrollDuration + PRE_ANIMATION_DURATION + scrollStart;

    return {
      scrollStart: finalScrollStart,
      scrollDuration: scrollDuration,
      initialOffsetY: scrollDuration / 2,
      finalOffsetY: 0,
      initialOpacity: 0,
      finalOpacity: 1,
    };
  };

  return (
    <>
      <ScrollBlock
        scrollLength={ADDITION + Math.max(0, height - window.innerHeight)}
      />
      <FixedWrapper ref={ref} {...props}>
        <FixedScrollFade
          scrollStart={scrollStart + ADDITION}
          scrollDuration={height}
          finalOffsetY={-height}
          initialOpacity={1}
          finalOpacity={1}
        >
          <BodyWide>
            <StyledTitle>{title}</StyledTitle>
          </BodyWide>
          <Layout>
            <FactsWrapper>
              <FixedScrollFade {...getScrollFadeProps(0)}>
                <FactsList facts={facts} />
              </FixedScrollFade>
            </FactsWrapper>
            {paragraphs.map((p, i) => (
              <FixedScrollFade key={i} {...getScrollFadeProps(i + 1)}>
                <BodyCenter>
                  {p.title && <ParagraphTitle>{p.title}</ParagraphTitle>}
                  <ParagraphText>{p.body}</ParagraphText>
                </BodyCenter>
              </FixedScrollFade>
            ))}
          </Layout>
        </FixedScrollFade>
      </FixedWrapper>
    </>
  );
};

const FixedWrapper = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
`;

const StyledTitle = styled(Title)`
  margin-top: 30px;
`;

const FactsWrapper = styled.div`
  width: 100%;
  ${GreaterThan(0, `margin-bottom: 0px;`)}
  ${GreaterThan(1400, `margin-bottom: 100px;`)}
`;

const Layout = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin: 30px 0px;
  display: flex;
  flex-direction: column;

  ${GreaterThan(0, `gap: 40px;`)}
  ${GreaterThan(600, `gap: 80px;`)}
  ${GreaterThan(1000, `gap: 120px;`)}
`;

const ParagraphTitle = styled(Paragraph)`
  margin-bottom: 10px;
  font-weight: ${({ theme }) => theme.font.default.weight.bold};
  color: ${({ theme }) => theme.color.text};
  ${({ theme }) =>
    GreaterThan(0, `font-size: ${theme.font.default.size.h6};`) +
    GreaterThan(600, `font-size: ${theme.font.default.size.h4};`)}
`;

const ParagraphText = styled(Paragraph)`
  color: ${({ theme }) => theme.color.text};
  ${({ theme }) =>
    GreaterThan(0, `font-size: ${theme.font.default.size.default};`) +
    GreaterThan(600, `font-size: ${theme.font.default.size.large};`)}
`;
