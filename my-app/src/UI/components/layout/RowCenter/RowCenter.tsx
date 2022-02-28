import React from 'react';
import styled from "styled-components";

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
  justify='space-between',
  ...props
}): React.ReactElement => (
  <MainWrapper {...props}>
    <RowWrapper>
      <Row1 $justify={justify}>
        {children}
      </Row1>
      <Row2>
        {center}
      </Row2>
    </RowWrapper>
  </MainWrapper>
);

const MainWrapper = styled.div`
  width: 100%;
  height: 50px;
  box-sizing: border-box;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
`;

const RowWrapper = styled(Row)`
  position: relative;
  width: 100%;
  justify-content: center;
`;

const Row1 = styled(Row)<{ $justify: string}>`
  position: absolute;
  width: 100%;
  justify-content: ${({$justify}) => $justify};
`;

const Row2 = styled(Row)`
  position: absolute;
  width: auto;
  justify-content: center;
`;