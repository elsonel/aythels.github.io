import React from 'react';
import styled from 'styled-components';

export interface TabLineProps extends React.HTMLAttributes<HTMLDivElement> {
  lineStart?: number | string;
  lineWidth?: number | string;
}

export const TabLine: React.FC<TabLineProps> = ({
  lineStart = 0,
  lineWidth = 100,
  ...props
}): React.ReactElement => {
  return (
    <Wrapper {...props}>
      <BackLine />
      <FrontLine
        $lineStart={
          typeof lineStart === 'number' ? `${lineStart}px` : lineStart
        }
        $lineWidth={
          typeof lineWidth === 'number' ? `${lineWidth}px` : lineWidth
        }
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;

  width: 200px;
  height: 2px;

  overflow: hidden;
`;

const FrontLine = styled.div<{
  $lineStart: string;
  $lineWidth: string;
}>`
  position: absolute;

  height: 100%;
  width: ${({ $lineWidth }) => $lineWidth};
  left: min(max(${({ $lineStart }) => $lineStart}, 0px), 100%);
  bottom: 0px;

  background: ${({ theme }) => theme.color.text};
  transition: ${({ theme }) => `${theme.speed.normal}`};
`;

const BackLine = styled.div`
  position: absolute;

  height: 1px;
  width: 100%;
  left: 0px;
  bottom: 0px;

  background: ${({ theme }) => theme.color.outline};
`;
