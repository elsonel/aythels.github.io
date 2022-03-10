import React from 'react';
import styled from "styled-components";
import { Chip, ChipProps } from '../Chip/Chip';
import { Heading } from '../../text/Heading/Heading';

export interface ChipListProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Chips in list
   */
  children?: React.ReactElement<ChipProps>[] | React.ReactElement<ChipProps>;
  /**
   * Title of list
   */
  title?: string
  /**
   * The size of all chips
   */
  size?: "medium" | "small";
  /**
   * Margin top and bottom between chips
   */
  marginColumn?: number;
    /**
   * Margin left and right between chips
   */
  marginRow?: number;
}

export const ChipList: React.FC<ChipListProps> = ({
  children,
  title,
  size="medium",
  marginColumn=8,
  marginRow=12,
  ...props
}): React.ReactElement => { 
  return (
  <Wrapper {...props}>
    {title && <Text>{title}</Text>}
    <ChipWrapper $marginColumn={marginColumn} $marginRow={marginRow}>
      {children instanceof Array ? children.map((child, i) =>
        React.isValidElement(child) && React.cloneElement(child, {key: i, size: size})
      ) : children}
    </ChipWrapper>
  </Wrapper>
)};

const Wrapper = styled.div`
  width: 100%;
`;

const Text = styled(Heading)`
  margin-bottom: 16px;
`

const ChipWrapper = styled.div<{$marginColumn: number, $marginRow: number}>`
  display: flex;
  flex-wrap: wrap;

  > * {
    margin-left: ${({$marginRow}) => `${$marginRow}px`};
    margin-bottom: ${({$marginColumn}) => `${$marginColumn}px`};
  }
`;