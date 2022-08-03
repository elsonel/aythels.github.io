import React from 'react';
import styled from 'styled-components';
import { LessThan, GreaterThan } from '../../../../utility/ResponsiveCSS';
import { FooterDesktop } from '../FooterDesktop/FooterDesktop';
import { FooterMobile } from '../FooterMobile/FooterMobile';

export interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Footer: React.FC<FooterProps> = ({
  ...props
}): React.ReactElement => (
  <div {...props}>
    <Mobile />
    <Desktop />
  </div>
);

const Desktop = styled(FooterDesktop)`
  display: none;

  ${GreaterThan(
    'tablet',
    `
    display: flex;
  `
  )}
`;

const Mobile = styled(FooterMobile)`
  display: none;

  ${LessThan(
    'tablet',
    `
    display: flex;
  `
  )}
`;
