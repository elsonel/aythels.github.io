import React from 'react';
import styled from 'styled-components';
import { GreaterThanHook } from '../../../../utilities/hooks/ResponsiveProps';
import { GreaterThan } from '../../../../utilities/styles/ResponsiveCSS';
import { LinkFake } from '../../../inputs/LinkFake/LinkFake';
import { Paragraph } from '../../../text/Paragraph/Paragraph';
import { Link } from '../../../inputs/Link/Link';

export interface IProjectLabelProps
  extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  type: string;
  year: number;
  href?: string;
  isOpeningNewTab?: boolean;
  onClick?: () => void;
  onHoverEnter?: () => void;
  onHoverLeave?: () => void;
}

export const ProjectLabel: React.FC<IProjectLabelProps> = ({
  name,
  type,
  year,
  href,
  isOpeningNewTab = false,
  onClick,
  onHoverEnter,
  onHoverLeave,
  ...props
}): React.ReactElement => {
  const isRowLayout = GreaterThanHook(600);

  return (
    <Wrapper key={name} {...props}>
      <Link
        href={href}
        isOpeningNewTab={isOpeningNewTab}
        onClick={(e) => {
          !isOpeningNewTab && e.preventDefault();
        }}
      >
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
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const Subtitle = styled(Paragraph).attrs(({ theme }) => ({
  isWrapped: false,
  font: theme.font.mono,
}))`
  position: relative;
  text-align: right;
  font-weight: ${({ theme }) => theme.font.mono.weight.semiBold};
  font-size: ${({ theme }) => theme.font.mono.size.small};
  color: ${({ theme }) => theme.color.text};
  transition: ${({ theme }) => theme.speed.normal}ms;

  ${GreaterThan(0, `top: 0px;`)}
  ${GreaterThan(900, `top: 0px;`)}
  ${GreaterThan(1200, `top: 2px;`)}
  ${GreaterThan(1400, `top: 3px;`)}
  ${GreaterThan(1600, `top: 4px;`)}
`;

const Title = styled(Paragraph).attrs(({ theme }) => ({
  size: 'h1',
  font: theme.font.title,
}))`
  text-align: right;
  transition: ${({ theme }) => theme.speed.normal}ms;
  color: ${({ theme }) => theme.color.text};
  ${GreaterThan(0, `font-size: 2rem;`)}
  ${GreaterThan(900, `font-size: 3rem;`)}
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
    padding-right: 20px;
  }

  &:hover ${Title} {
    color: ${({ theme }) => theme.color.primary};
  }

  &:hover ${Subtitle} {
    color: ${({ theme }) => theme.color.primary};
  }
`;
