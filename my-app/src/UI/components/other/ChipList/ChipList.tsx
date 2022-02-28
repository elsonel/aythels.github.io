import React from 'react';
import styled from "styled-components";
import { Chip } from '../Chip/Chip';
import { Heading } from '../../text/Heading/Heading';

export interface ChipListProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Chips in list
   */
  children?: React.ReactElement<typeof Chip>[];
  /**
   * Margin top and bottom between chips
   */
  marginTop?: number;
    /**
   * Margin left and right between chips
   */
  marginLeft?: number;
}

export const ChipList: React.FC<ChipListProps> = ({
  children,
  marginTop=6,
  marginLeft=8,
  ...props
}): React.ReactElement => { 
  return (
  <Wrapper {...props}>
    <Heading>Skills</Heading>
    <ChipWrapper $marginTop={marginTop} $marginLeft={marginLeft}>
      {children}
    </ChipWrapper>
  </Wrapper>
)};

const Wrapper = styled.div`
  width: 100%;
`;

const ChipWrapper = styled.div<{$marginTop: number, $marginLeft: number}>`
  display: flex;
  flex-wrap: wrap;

  > * {
    margin: ${({$marginTop, $marginLeft}) => `${$marginTop}px ${$marginLeft}px`};
  }
`;