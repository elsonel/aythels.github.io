import React from 'react';
import styled, { keyframes, useTheme } from 'styled-components';
import { GreaterThan } from '../../../utility/styles/ResponsiveCSS';
import { FrameLayout } from '../../layout/FrameLayout/FrameLayout';
import { FrameLayoutSticky } from '../../layout/FrameLayoutSticky/FrameLayoutSticky';
import { FadeIn } from '../../other/FadeIn/FadeIn';
import { Paragraph } from '../../text/Paragraph/Paragraph';
import { BodyText } from './BodyText/BodyText';
import { FactsList } from './FactsList/FactsList';
import { Title } from './Title/Title';

export interface IProjectDetailsPageProps
  extends React.HTMLAttributes<HTMLDivElement> {
  isLoaded?: boolean;
  delay?: number;
  title: string;
  facts: { label: string; value: string }[];
  paragraphs: { title?: string; body: string }[];
}

export const ProjectDetailsPage: React.FC<IProjectDetailsPageProps> = ({
  isLoaded = true,
  delay = 0,
  title,
  facts,
  paragraphs,
  ...props
}): React.ReactElement => {
  const stagger = useTheme().speed.stagger;

  const titleDelay = delay + stagger * 1;
  const factsDelay = delay + stagger * 2;
  const paragraphDelay = delay + stagger * 3;

  return (
    <FrameLayout {...props}>
      <Wrapper>
        <FadeIn isLoaded={isLoaded} delay={titleDelay}>
          <Title>{title}</Title>
        </FadeIn>
        <Divider $isLoaded={isLoaded} $delay={titleDelay} />
        <FadeIn isLoaded={isLoaded} delay={factsDelay}>
          <FactsList facts={facts} />
        </FadeIn>
        <Divider $isLoaded={isLoaded} $delay={factsDelay} />
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
      </Wrapper>
    </FrameLayout>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const BodyLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  ${GreaterThan(0, `gap: 50px; padding: 30px 0px;`)}
  ${GreaterThan(800, `gap: 80px; padding: 80px 0px;`)}
`;

const Animation = keyframes`
  0% {
    opacity: 0;
    width: 0%;
  }
  100% {
    opacity: 1;
    width: 100%;
  }
`;

const Divider = styled.div<{ $isLoaded: boolean; $delay: number }>`
  box-sizing: border-box;
  height: 2px;
  width: 0%;
  opacity: 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.outline};

  animation-fill-mode: forwards;
  animation-duration: ${({ theme }) => theme.speed.slow}ms;
  animation-delay: ${({ $delay }) => $delay}ms;
  animation-name: ${({ $isLoaded }) => ($isLoaded ? Animation : 'none')};
`;
