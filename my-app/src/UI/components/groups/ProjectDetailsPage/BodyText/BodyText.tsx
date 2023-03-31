import React from 'react';
import styled from 'styled-components';
import { GreaterThan } from '../../../../utility/styles/ResponsiveCSS';
import { BodyCenter } from '../../../layout/BodyCenter/BodyCenter';
import { Paragraph } from '../../../text/Paragraph/Paragraph';

export interface IBodyTextProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  children?: string;
}

export const BodyText: React.FC<IBodyTextProps> = ({
  title,
  children,
  ...props
}): React.ReactElement => (
  <BodyCenter {...props}>
    {title && <ParagraphTitle>{title}</ParagraphTitle>}
    <ParagraphText>{children}</ParagraphText>
  </BodyCenter>
);

const ParagraphTitle = styled(Paragraph)`
  margin-bottom: 10px;
  font-weight: ${({ theme }) => theme.font.default.weight.bold};
  color: ${({ theme }) => theme.color.text};
  ${({ theme }) =>
    GreaterThan(0, `font-size: ${theme.font.default.size.h6};`) +
    GreaterThan(800, `font-size: ${theme.font.default.size.h3};`)}
`;

const ParagraphText = styled(Paragraph)`
  color: ${({ theme }) => theme.color.text};
  ${({ theme }) =>
    GreaterThan(0, `font-size: ${theme.font.default.size.default};`) +
    GreaterThan(800, `font-size: ${theme.font.default.size.large};`)}
`;
