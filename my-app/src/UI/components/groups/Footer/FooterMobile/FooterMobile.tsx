import React from 'react';
import styled from 'styled-components';
import { FooterIconRow } from '../FooterIconRow/FooterIconRow';
import { Paragraph } from '../../../text/Paragraph';

export const FooterMobile: React.FC = ({ ...props }): React.ReactElement => (
  <Wrapper {...props}>
    <FooterIconRowStyled size={24} />
    <TextWrapper>
      <TextName size={'tiny'}>© 2022</TextName>
      <TextName size={'tiny'} weight={'bold2'}>
        ELSON LIANG
      </TextName>
    </TextWrapper>
    <TextLink size={'tiny'}>
      <Link href="https://www.w3schools.com" target="_blank" rel="noreferrer">
        Designed from scratch and built with React.
      </Link>
    </TextLink>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  padding: 40px 20px;
  box-sizing: border-box;

  border-top: 1px solid ${({ theme }) => theme.colors.textPassive3};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

const TextName = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.textPassive2};
`;

const TextLink = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.textPassive2};
  text-align: center;

  &:hover {
    color: ${({ theme }) => theme.colors.textPassive1};
  }
`;

const Link = styled.a`
  color: inherit;
`;

const FooterIconRowStyled = styled(FooterIconRow)`
  padding-bottom: 12px;
`;
