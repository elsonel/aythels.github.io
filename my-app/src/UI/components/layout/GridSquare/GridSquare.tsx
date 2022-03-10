import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from "styled-components";
import { LessThan } from '../../../utility/ResponsiveCSS';
import { Thumbnail } from '../../images/Thumbnail/Thumbnail';

export interface GridSquareProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactElement[] | React.ReactElement;
}

export const GridSquare: React.FC<GridSquareProps> = ({
  children,
  ...props
}): React.ReactElement => { 

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, [setVisible]);

  return (
    <Wrapper {...props}>
      {children instanceof Array ? children.map((Component, index) => 
        <ItemWrapper key={index} $visible={visible} $index={index}>
          {Component}
        </ItemWrapper>
      ) : children}
    </Wrapper>
)};

// https://spectrum.chat/styled-components/general/how-to-apply-styles-to-children~adf92232-33f8-47a6-a378-77c64d649a40

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const ItemWrapper = styled.div<{$visible: boolean; $index: number}>`
  opacity: ${({$visible}) => $visible ? 1 : 0};
  pointer-event: ${({$visible}) => $visible ? 'auto' : 'none'};
  transition: opacity ${({theme}) => theme.speed.slow} ease-out ${({$index}) => $index * 60}ms;

  width: 25%;

  ${LessThan(900, `
    width: ${100/3}%;
  `)}

  ${LessThan(700, `
    width: ${100/2}%;
  `)}

  ${LessThan(500, `
    width: ${100/1}%;
  `)}

  > * {
    width: 100%;
  }
`
