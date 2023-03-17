import React from 'react';
import styled from 'styled-components';
import { Awards } from './Awards/Awards';
import { ContactInfo } from './ContactInfo/ContactInfo';
import { Logo } from './Logo/Logo';
import { PersonalInfo } from './PersonalInfo/PersonalInfo';

export interface AboutContentProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const AboutContent: React.FC<AboutContentProps> = ({
  ...props
}): React.ReactElement => {
  return (
    <Wrapper {...props}>
      <StyledLogo />
      <CenterLayout>
        <PersonalInfo />
        <Awards />
        <ContactInfo />
      </CenterLayout>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 30px 20px;
`;

const StyledLogo = styled(Logo)`
  margin-bottom: 50px;
`;

const CenterLayout = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 0px 50px;

  display: flex;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
