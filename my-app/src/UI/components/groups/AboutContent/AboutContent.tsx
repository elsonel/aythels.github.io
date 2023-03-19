import React from 'react';
import styled from 'styled-components';
import { GreaterThan } from '../../../utility/styles/ResponsiveCSS';
import { Awards } from './Awards/Awards';
import { ContactInfo } from './ContactInfo/ContactInfo';
import { Logo } from './Logo/Logo';
import { PersonalInfo } from './PersonalInfo/PersonalInfo';

export interface IAboutContentProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const AboutContent: React.FC<IAboutContentProps> = ({
  ...props
}): React.ReactElement => {
  return (
    <Wrapper {...props}>
      <StyledLogo />
      <CenteredWrapper>
        <Layout>
          <PersonalInfoWrapper>
            <PersonalInfo />
          </PersonalInfoWrapper>
          <Awards />
          <ContactInfo />
        </Layout>
      </CenteredWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  min-height: inherit;
  display: flex;
  flex-direction: column;
`;

const StyledLogo = styled(Logo)`
  box-sizing: border-box;
  width: 100%;
  padding: 30px 20px;
`;

const PersonalInfoWrapper = styled.div`
  ${GreaterThan(0, `width: 100%;`)}
  ${GreaterThan(1100, `width: 400px;`)}
`;

const CenteredWrapper = styled.div`
  flex-grow: 1;
  width: 100%;

  display: flex;
  ${GreaterThan(0, `align-items: start;`)}
  ${GreaterThan(1100, `align-items: end;`)}
`;

const Layout = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 30px 20px;

  display: flex;
  ${GreaterThan(0, `flex-direction: column; gap: 60px;`)}
  ${GreaterThan(1100, `flex-direction: row; gap: 120px;`)}
`;
