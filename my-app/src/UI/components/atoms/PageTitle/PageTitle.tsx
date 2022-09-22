import React from 'react';
import styled, { css } from 'styled-components';
import { GreaterThan } from '../../../utility/styles/ResponsiveCSS';
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
  children?: string;
  isAlignedTop?: boolean;
  breakpoints?: PageTitleBreakpoint[];
}

export const PageTitle: React.FC<PageTitleProps> = ({
  children,
  isAlignedTop = true,
  breakpoints = DEFAULT_TITLE_BREAKPOINTS,
  ...props
}): React.ReactElement => {
  return (
    <Wrapper {...props}>
      <Title $isAlignedTop={isAlignedTop} $breakpoints={breakpoints}>
        {children}
      </Title>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow: hidden;
  box-sizing: border-box;
  padding: 20px;
  margin-bottom: -5px;
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
  font-size: 4rem;
  top: -7px;
`;

const SIZES = {
  small: TitleSmall.toString(),
  medium: TitleMedium.toString(),
  large: TitleLarge.toString(),
};

const Title = styled(Paragraph)<{
  $breakpoints: PageTitleBreakpoint[];
  $isAlignedTop: boolean;
}>`
  position: relative;
  line-height: 0.94;
  font-weight: ${({ theme }) => theme.font.weight.bold2};
  left: -2px;
  transition: none;

  ${TitleLarge}

  ${({ $breakpoints }) =>
    $breakpoints.map((e) => GreaterThan(e.minWidth, SIZES[e.size]))};

  ${({ $isAlignedTop }) => !$isAlignedTop && `top: 0px !important;`};
`;
