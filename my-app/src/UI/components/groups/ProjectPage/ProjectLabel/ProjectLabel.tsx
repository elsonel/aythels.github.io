import React from 'react';
import styled from 'styled-components';
import { GreaterThanHook } from '../../../../utility/hooks/ResponsiveProps';
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
}): React.ReactElement => {
  const isRowLayout = GreaterThanHook(600);

  return (
    <Wrapper key={name} {...props}>
      <TextLayout
        onClick={onClick}
        onPointerEnter={() => onHoverEnter && onHoverEnter()}
        onPointerLeave={() => onHoverLeave && onHoverLeave()}
      >
        <Subtitle>
          {year}&nbsp;•&nbsp;{type.toUpperCase()}
          {isRowLayout && '\xa0\xa0'}
        </Subtitle>
        <Title>{name}</Title>
      </TextLayout>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const Subtitle = styled(Paragraph).attrs(() => ({
  isWrapped: false,
}))`
  text-align: right;
  color: ${({ theme }) => theme.color.text};
  font-weight: ${({ theme }) => theme.font.mono.weight.semiBold};
  font-family: ${({ theme }) => theme.font.mono.family};
  transition: ${({ theme }) => theme.speed.normal}ms;
  font-size: ${({ theme }) => theme.font.mono.size.small};
`;

const Title = styled(Paragraph).attrs(() => ({
  size: 'h1',
}))`
  text-align: right;
  transition: ${({ theme }) => theme.speed.normal}ms;
  color: ${({ theme }) => theme.color.text};
  font-family: ${({ theme }) => theme.font.title.family};
  line-height: 0.8;
  ${GreaterThan(0, `font-size: 2rem;`)}
  ${GreaterThan(800, `font-size: 3rem;`)}
  ${GreaterThan(1200, `font-size: 4rem;`)}
  ${GreaterThan(1400, `font-size: 5rem;`)}
  ${GreaterThan(1600, `font-size: 6rem;`)}
`;

const TextLayout = styled.div`
  overflow: hidden;
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
