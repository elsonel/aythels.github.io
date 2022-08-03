import React from 'react';
import styled from 'styled-components';
import { FooterIconRow } from '../FooterIconRow/FooterIconRow';
import { Paragraph } from '../../../text/Paragraph';

export const FooterDesktop: React.FC = ({ ...props }): React.ReactElement => (
  <Wrapper {...props}>
    <div>
      <TextWrapper>
        <TextName size={'small'}>© 2022</TextName>
        <TextName size={'small'} weight={'bold2'}>
          ELSON LIANG
        </TextName>
      </TextWrapper>
      <TextLink size={'small'}>
        <Link href="https://www.w3schools.com" target="_blank" rel="noreferrer">
          Designed from scratch and built with React.
        </Link>
      </TextLink>
    </div>
    <FooterIconRow />
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  padding: 40px 20px;
  box-sizing: border-box;

  border-top: 1px solid ${({ theme }) => theme.colors.textPassive3};

  display: flex;
  justify-content: space-between;
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

  &:hover {
    color: ${({ theme }) => theme.colors.textPassive1};
  }
`;

const Link = styled.a`
  color: inherit;
`;
