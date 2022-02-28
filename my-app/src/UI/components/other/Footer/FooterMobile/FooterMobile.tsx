import React from 'react';
import styled from "styled-components";
import { FooterText } from '../FooterText/FooterText';
import { FooterIconRow } from '../FooterIconRow/FooterIconRow';

export const FooterMobile: React.FC = ({
  ...props
}): React.ReactElement => (
  <Wrapper {...props}>
    <FooterIconRowStyled size={24}/>
    <FooterText size='tiny' align='center' />
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  padding: 40px 0;
  box-sizing: border-box;

  border-top: 1px solid ${({theme}) => theme.colors.textPassive3};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FooterIconRowStyled = styled(FooterIconRow)`
  padding-bottom: 12px;
`