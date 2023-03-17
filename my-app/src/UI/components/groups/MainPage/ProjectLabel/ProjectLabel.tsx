import React from 'react';
import styled from 'styled-components';
import { GreaterThan } from '../../../../utility/styles/ResponsiveCSS';
import { Paragraph } from '../../../text/Paragraph/Paragraph';

export interface IProjectLabelProps
  extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  type: string;
  year: number;
  onClick?: () => void;
  onHoverEnter?: () => void;
  onHoverLeave?: () => void;
}

export const ProjectLabel: React.FC<IProjectLabelProps> = ({
  name,
  type,
  year,
  onClick,
  onHoverEnter,
  onHoverLeave,
  ...props
}): React.ReactElement => (
  <Wrapper key={name} {...props}>
    <TextLayout
      onClick={onClick}
      onPointerEnter={() => onHoverEnter && onHoverEnter()}
      onPointerLeave={() => onHoverLeave && onHoverLeave()}
    >
      <Subtitle>
        {year}&nbsp;&nbsp;/&nbsp;&nbsp;{type}
      </Subtitle>
      <Title>{name}</Title>
    </TextLayout>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const Subtitle = styled(Paragraph).attrs(() => ({
  isWrapped: false,
}))`
  text-align: right;
  transition: ${({ theme }) => theme.speed.normal}ms;
  color: ${({ theme }) => theme.color.text};
  font-weight: ${({ theme }) => theme.font.default.weight.bold};
  ${({ theme }) =>
    GreaterThan(0, `font-size: ${theme.font.default.size.small};`) +
    GreaterThan(800, `font-size: ${theme.font.default.size.default};`)}
`;

const Title = styled(Paragraph).attrs(() => ({
  size: 'h1',
}))`
  text-align: right;
  transition: ${({ theme }) => theme.speed.normal}ms;
  color: ${({ theme }) => theme.color.text};
  font-family: ${({ theme }) => theme.font.title.family};
  line-height: 0.9;
  ${GreaterThan(0, `font-size: 2rem; margin-left: 6px;`)}
  ${GreaterThan(800, `font-size: 3rem; margin-left: 10px;`)}
  ${GreaterThan(1200, `font-size: 4.5rem; margin-left: 10px;`)}
`;

const TextLayout = styled.div`
  display: inline-flex;
  user-select: none;
  cursor: pointer;
  ${GreaterThan(0, `flex-direction: column-reverse;`)}
  ${GreaterThan(600, `flex-direction: row;`)}

  transition: ${({ theme }) => theme.speed.normal}ms;

  &:hover {
    transform: translateX(-20px);
  }

  &:hover ${Title} {
    color: ${({ theme }) => theme.color.primary};
  }

  &:hover ${Subtitle} {
    color: ${({ theme }) => theme.color.primary};
  }
`;
