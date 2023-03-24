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
  isWrapped: false,
}))`
  position: relative;

  color: ${({ theme }) => theme.color.text};
  font-family: ${({ theme }) => theme.font.mono.family};
  font-weight: ${({ theme }) => theme.font.mono.weight.medium};
  letter-spacing: ${({ theme }) => theme.font.default.letterSpacing.button};

  ${GreaterThan(0, `font-size: 2.2rem; left: -2px; top: -2px;`)}
  ${GreaterThan(440, `font-size: 3rem; left: -4px; top: -4px;`)}
  line-height: 1;
  overflow-wrap: normal;
`;

const Subtitle = styled(Paragraph).attrs(() => ({
  isWrapped: false,
}))`
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.font.mono.size.h5};
`;
