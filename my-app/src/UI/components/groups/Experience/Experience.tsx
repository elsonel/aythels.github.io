import React, { useEffect, useRef, useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { GreaterThan } from '../../../utilities/styles/ResponsiveCSS';
import { Paragraph } from '../../text/Paragraph/Paragraph';

export interface ExperienceProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
}

export const Experience: React.FC<ExperienceProps> = ({
  ...props
}): React.ReactElement => {
  return (
    <Wrapper {...props}>
      <Title isWrapped={false}>EXPERIENCE</Title>
      <GridWrapper>
        <Edge />
        <Grid>
          <Item />
          <Item />
          <Item />
          <Item />
        </Grid>
        <Edge />
      </GridWrapper>
      <Border />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
`;

const Title = styled(Paragraph)`
  ${GreaterThan(0, `font-size: 2rem;`)}
  ${GreaterThan(300, `font-size: 3rem;`)}
  ${GreaterThan(600, `font-size: 5rem;`)}
  ${GreaterThan(700, `font-size: 7rem;`)}
  ${GreaterThan(1200, `font-size: 10rem;`)}

  font-family: ${({ theme }) => theme.font.title.family};
  text-align: center;
  box-shadow: inset 0 0 0 1px ${({ theme }) => theme.color.outline};
  padding: 10px 0px;
`;

const GridWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const Grid = styled.div`
  flex-grow: 1;
  display: grid;

  ${GreaterThan(0, `grid-template-columns: 1fr 1fr;`)}
  ${GreaterThan(800, `grid-template-columns: 1fr 1fr 1fr 1fr;`)}
`;

const Item = styled.div`
  aspect-ratio: 1;
  box-shadow: inset 0 0 0 1px ${({ theme }) => theme.color.outline};
`;

const Edge = styled.div`
  width: 40px;
  align-self: stretch;
  box-shadow: inset 0 0 0 1px ${({ theme }) => theme.color.outline};
`;

const Border = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  box-shadow: inset 0 0 0 2px ${({ theme }) => theme.color.outline};
  pointer-events: none;
`;
