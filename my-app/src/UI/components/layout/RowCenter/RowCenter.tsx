import React from 'react';
import styled from 'styled-components';

export interface RowCenterProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The center element
   */
  center?: string | JSX.Element;
  /**
   * The alignment of child or background elements
   */
  justify?: string;
}

export const RowCenter: React.FC<RowCenterProps> = ({
  children,
  center,
  justify = 'space-between',
  ...props
}): React.ReactElement => (
  <Wrapper {...props}>
    <RowBackground $justify={justify}>
      {children}
      <RowForeground>{center}</RowForeground>
    </RowBackground>
  </Wrapper>
);

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
`;

const RowBackground = styled.div<{ $justify: string }>`
  position: relative;
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  justify-content: ${({ $justify }) => $justify};
`;

const RowForeground = styled.div`
  position absolute;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  pointer-events: none; 

  > * {
    pointer-events: auto;
  }
`;
