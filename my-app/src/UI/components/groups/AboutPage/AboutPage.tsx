import React from 'react';
import styled from 'styled-components';
import { GreaterThan } from '../../../utility/styles/ResponsiveCSS';
import { FrameLayout } from '../../layout/FrameLayout/FrameLayout';
import { Awards } from './Awards/Awards';
import { Contact } from './Contact/Contact';
import { Logo } from './Logo/Logo';
import { Background } from './Background/Background';

export interface IAboutPageProps extends React.HTMLAttributes<HTMLDivElement> {}

export const AboutPage: React.FC<IAboutPageProps> = ({
  ...props
}): React.ReactElement => {
  return (
    <FrameLayout {...props}>
      <Wrapper>
        <StyledLogo />
        <Layout>
          <BackgroundWrapper>
            <Background />
          </BackgroundWrapper>
          <Awards />
          <Contact />
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
  width: 100%;
  ${GreaterThan(0, `padding: 30px 20px;`)}
  ${GreaterThan(800, `padding: 50px 40px;`)}
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
  ${GreaterThan(1200, `width: 600px;`)}
`;
