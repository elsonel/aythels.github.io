import React from 'react';
import styled from 'styled-components';
import { FooterCopyright } from '../FooterCopyright';
import { FooterIconRow } from '../FooterIconRow';
import { FooterLink } from '../FooterLink';

export interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Footer: React.FC<FooterProps> = ({
  ...props
}): React.ReactElement => (
  <Wrapper {...props}>
    <FooterIconRowStyled />
    <FooterCopyright />
    <FooterLink />
  </Wrapper>
);

const Wrapper = styled.div`
  box-sizing: border-box;

  width: 100%;
  height: ${({ theme }) => theme.size.footerHeight}px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FooterIconRowStyled = styled(FooterIconRow)`
  margin-bottom: 10px;
`;
