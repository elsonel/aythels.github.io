import React from 'react';
import styled from 'styled-components';
import { FooterIconRow } from '../FooterIconRow/FooterIconRow';
import { TextFooter } from '../../../text/TextFooter';

export const FooterMobile: React.FC = ({ ...props }): React.ReactElement => (
  <Wrapper {...props}>
    <FooterIconRowStyled />
    <TextWrapper>
      <TextFooter size={'tiny'} children="© 2022&nbsp;" />
      <TextFooter size={'tiny'} children="ELSON LIANG" />
    </TextWrapper>
    <TextFooter size={'tiny'}>
      <Link href="https://www.w3schools.com" target="_blank" rel="noreferrer">
        Designed from scratch and built with React.
      </Link>
    </TextFooter>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;

  border-top: 1px solid ${({ theme }) => theme.colors.textPassive4};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextWrapper = styled.div`
  display: flex;
`;

const Link = styled.a`
  color: inherit;

  &:hover {
    color: ${({ theme }) => theme.colors.textPassive1};
  }

  transition: ${({ theme }) => theme.speed.normal};
`;

const FooterIconRowStyled = styled(FooterIconRow)`
  margin-bottom: 10px;
`;
