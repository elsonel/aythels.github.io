import React from 'react';
import styled from "styled-components";
import { ResponsiveLessThan, ResponsiveGreaterThan } from '../../../../utility/Responsive';
import { FooterDesktop } from '../FooterDesktop/FooterDesktop';
import { FooterMobile } from '../FooterMobile/FooterMobile';

export const Footer: React.FC = ({
  ...props
}): React.ReactElement => (
  <div {...props}>
    <Mobile/>
    <Desktop/>
  </div>
);

const Desktop = styled(FooterDesktop)`
  display: none;

  ${ResponsiveGreaterThan('tablet', `
    display: flex;
  `)}
`;

const Mobile = styled(FooterMobile)`
  display: none;

  ${ResponsiveLessThan('tablet', `
    display: flex;
  `)}
`;