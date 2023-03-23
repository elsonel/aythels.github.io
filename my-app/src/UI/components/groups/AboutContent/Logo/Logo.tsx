import React from 'react';

import styled from 'styled-components';
import { GreaterThan } from '../../../../utility/styles/ResponsiveCSS';
import { Paragraph } from '../../../text/Paragraph/Paragraph';

export interface ILogoProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Logo: React.FC<ILogoProps> = ({
  ...props
}): React.ReactElement => {
  return (
    <Wrapper {...props}>
      <Name>ELSON LIANG</Name>
      <Subtitle>Developer & Designer</Subtitle>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow: hidden;
  width: 100%;
`;

const Name = styled(Paragraph).attrs(() => ({
  size: 'h1',
}))`
  position: relative;
  top: -4px;
  left: -4px;

  color: ${({ theme }) => theme.color.text};
  font-family: ${({ theme }) => theme.font.logo.family};
  letter-spacing: ${({ theme }) => theme.font.default.letterSpacing.button};

  ${GreaterThan(0, `font-size: 2.4rem;`)}
  ${GreaterThan(400, `font-size: 3rem;`)}
  line-height: 1;
  overflow-wrap: normal;
`;

const Subtitle = styled(Paragraph).attrs(() => ({
  isWrapped: false,
}))`
  color: ${({ theme }) => theme.color.text};
  ${({ theme }) =>
    GreaterThan(0, `font-size: ${theme.font.default.size.large};`) +
    GreaterThan(400, `font-size: ${theme.font.default.size.h6};`)}
`;
