import React from 'react';
import styled, { css } from 'styled-components';
import { GreaterThan } from '../../../utilities/styles/ResponsiveCSS';
import { Paragraph } from '../../text/Paragraph';

export const DEFAULT_TITLE_BREAKPOINTS: PageTitleBreakpoint[] = [
  {
    minWidth: 0,
    size: 'small',
  },
  {
    minWidth: 400,
    size: 'medium',
  },
  {
    minWidth: 600,
    size: 'large',
  },
];

export interface PageTitleBreakpoint {
  minWidth: number;
  size: 'small' | 'medium' | 'large';
}

export interface PageTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  textAlign?: 'center' | 'left' | 'right' | 'justify';
  breakpoints?: PageTitleBreakpoint[];
}

export const PageTitle: React.FC<PageTitleProps> = ({
  title,
  subtitle,
  textAlign = 'left',
  breakpoints = DEFAULT_TITLE_BREAKPOINTS,
  ...props
}): React.ReactElement => {
  return (
    <Wrapper {...props}>
      <Title textAlign={textAlign} $breakpoints={breakpoints}>
        {title}
      </Title>
      <Subtitle textAlign={textAlign}>{subtitle}</Subtitle>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow: hidden;
  box-sizing: border-box;
  padding: 20px;
`;

const TitleSmall = css`
  font-size: 2.2rem;
  top: -4px;
`;

const TitleMedium = css`
  font-size: 3rem;
  top: -5px;
`;

const TitleLarge = css`
  font-size: 5rem;
  top: -8px;
`;

const SIZES = {
  small: TitleSmall.toString(),
  medium: TitleMedium.toString(),
  large: TitleLarge.toString(),
};

const Title = styled(Paragraph)<{
  $breakpoints: PageTitleBreakpoint[];
}>`
  position: relative;
  line-height: 0.94;
  font-weight: ${({ theme }) => theme.font.default.weight.bold};
  left: -2px;
  margin-bottom: -6px;
  transition: none;

  ${TitleLarge}

  ${({ $breakpoints }) =>
    $breakpoints.map((e) => GreaterThan(e.minWidth, SIZES[e.size]))};
`;

const Subtitle = styled(Paragraph)`
  font-size: ${({ theme }) => theme.font.default.size.large};
  font-weight: ${({ theme }) => theme.font.default.weight.bold};
`;
