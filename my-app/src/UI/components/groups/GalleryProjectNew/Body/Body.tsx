import React from 'react';
import styled from 'styled-components';
import { GreaterThan } from '../../../../utility/styles/ResponsiveCSS';
import { BodyCenter } from '../../../layout/BodyCenter';
import { Paragraph } from '../../../text/Paragraph/Paragraph';
import { FactsList } from '../FactsList/FactsList';
import { Title } from '../Title/Title';
import { FadeIn } from '../../../other/FadeIn/FadeIn';
import { FixedScrollFade } from '../../../other/FixedScrollFade/FixedScrollFade';
import { BodyWide } from '../../../layout/BodyWide/BodyWide';

export interface BodyProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  facts: { label: string; value: string }[];
  paragraphs: { title?: string; body: string }[];
  isLoaded?: boolean;
}

export const Body: React.FC<BodyProps> = ({
  title,
  facts,
  paragraphs,
  isLoaded = true,
  ...props
}): React.ReactElement => {
  /*
  const [isLoaded, setIsLoaded] = useState(false);

  useOnWindowScroll(() => {
    delayRef.current = 0;
    onScroll();
  });*/

  return (
    <>
      <FixedWrapper {...props}>
        <FixedScrollFade
          scrollStart={600}
          scrollDuration={1000} // height of the container
          finalOffsetY={-1000}
          initialOpacity={1}
          finalOpacity={1}
        >
          <BodyWide>
            <StyledTitle>{title}</StyledTitle>
          </BodyWide>
          <FactsWrapper>
            <FadeIn delay={0} offset={20} isLoaded={isLoaded}>
              <FactsList facts={facts} />
            </FadeIn>
          </FactsWrapper>
          <Layout>
            {paragraphs.map((e, i) => (
              <FadeIn
                key={i}
                delay={i * 200 + 200}
                offset={50}
                isLoaded={isLoaded}
              >
                <BodyCenter>
                  {e.title && <ParagraphTitle>{e.title}</ParagraphTitle>}
                  <ParagraphText>{e.body}</ParagraphText>
                </BodyCenter>
              </FadeIn>
            ))}
          </Layout>
        </FixedScrollFade>
      </FixedWrapper>
      <Block />
    </>
  );
};

const Block = styled.div`
  width: 100%;
  height: 2000px;
`;

const BodyWrapper = styled.div<{ $isVisible: boolean }>`
  width: 100%;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  pointer-events: ${({ $isVisible }) => ($isVisible ? 'auto' : 'none')};
  transition: ${({ theme }) => theme.speed.slow}ms;
`;

const FixedWrapper = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
`;

const StyledTitle = styled(Title)`
  margin-top: 40px;
`;

const FactsWrapper = styled.div`
  width: 100%;
  ${GreaterThan(0, `margin-bottom: 0px; margin-top: 40px;`)}
  ${GreaterThan(1400, `margin-bottom: 100px; margin-top: 40px;`)}
`;

const Layout = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;

  ${GreaterThan(0, `gap: 40px; padding-top: 40px;`)}
  ${GreaterThan(600, `gap: 80px; padding-top: 80px;`)}
  ${GreaterThan(1000, `gap: 120px; padding-top: 120px`)}
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
