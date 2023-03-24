import React from 'react';
import styled from 'styled-components';
import { GreaterThan } from '../../../utility/styles/ResponsiveCSS';
import { FrameLayout } from '../../layout/FrameLayout/FrameLayout';
import { Awards } from './Awards/Awards';
import { Contact } from './Contact/Contact';
import { Logo } from './Logo/Logo';
import { Background } from './Background/Background';
import { FadeIn } from '../../other/FadeIn/FadeIn';

export interface IAboutPageProps extends React.HTMLAttributes<HTMLDivElement> {
  isLoaded?: boolean;
  delay?: number;
}

export const AboutPage: React.FC<IAboutPageProps> = ({
  isLoaded = true,
  delay = 0,
  ...props
}): React.ReactElement => {
  const stagger = 150;
  const logoDelay = delay + stagger;
  const backgroundDelay = delay + stagger * 2;
  const awardsDelay = delay + stagger * 3;
  const contactDelay = delay + stagger * 4;

  return (
    <FrameLayout {...props}>
      <Wrapper>
        <FadeIn isLoaded={isLoaded} delay={logoDelay}>
          <StyledLogo />
        </FadeIn>
        <Layout>
          <BackgroundWrapper>
            <FadeIn isLoaded={isLoaded} delay={backgroundDelay}>
              <Background />
            </FadeIn>
          </BackgroundWrapper>
          <StyledFadeIn isLoaded={isLoaded} delay={awardsDelay}>
            <Awards />
          </StyledFadeIn>
          <StyledFadeIn isLoaded={isLoaded} delay={contactDelay}>
            <Contact />
          </StyledFadeIn>
        </Layout>
      </Wrapper>
    </FrameLayout>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledLogo = styled(Logo)`
  box-sizing: border-box;
  ${GreaterThan(0, `padding: 30px 20px;`)}
  ${GreaterThan(800, `padding: 50px 40px;`)}
`;

const StyledFadeIn = styled(FadeIn)`
  display: inline-block;
  width: auto;
`;

const Layout = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;

  ${GreaterThan(0, `flex-direction: column; gap: 80px; padding: 30px 20px;`)}
  ${GreaterThan(800, `padding: 50px 40px;`)}
  ${GreaterThan(1200, `flex-direction: row; gap: 120px; padding: 50px 40px;`)}
`;

const BackgroundWrapper = styled.div`
  ${GreaterThan(0, `width: 100%;`)}
  ${GreaterThan(1200, `width: 560px;`)}
`;
