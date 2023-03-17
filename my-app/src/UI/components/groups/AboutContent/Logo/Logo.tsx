import React from 'react';
import { Textfit } from 'react-textfit';
import styled from 'styled-components';
import { GreaterThan } from '../../../../utility/styles/ResponsiveCSS';
import { Paragraph } from '../../../text/Paragraph/Paragraph';

export interface ILogoProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Logo: React.FC<ILogoProps> = ({
  ...props
}): React.ReactElement => {
  return (
    <Wrapper {...props}>
      <Textfit mode="single" forceSingleModeWidth min={28} max={1000}>
        <Name>ELSON LIANG</Name>
      </Textfit>
      <Subtitle>Developer & Designer</Subtitle>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow: hidden;
  width: min(300px, 100%);
`;

const Name = styled(Paragraph).attrs(() => ({
  size: 'h1',
}))`
  position: relative;
  left: -3px;

  color: ${({ theme }) => theme.color.text};
  font-family: ${({ theme }) => theme.font.logo.family};
  letter-spacing: ${({ theme }) => theme.font.default.letterSpacing.button};
  font-weight: ${({ theme }) => theme.font.default.weight.medium};
  font-size: inherit;
  line-height: 1;
  overflow-wrap: normal;
`;

const Subtitle = styled(Paragraph).attrs(() => ({
  isWrapped: false,
}))`
  color: ${({ theme }) => theme.color.text};
`;
