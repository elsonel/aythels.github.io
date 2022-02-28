import React from 'react';
import styled from "styled-components";
import { FooterText } from '../FooterText/FooterText';
import { FooterIconRow } from '../FooterIconRow/FooterIconRow';

export const FooterDesktop: React.FC = ({
  ...props
}): React.ReactElement => (
  <Wrapper {...props}>
    <FooterText/>
    <FooterIconRow/>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  padding: 40px;
  box-sizing: border-box;

  border-top: 1px solid ${({theme}) => theme.colors.textPassive3};

  display: flex;
  justify-content: space-between;
  align-items: center;
`;