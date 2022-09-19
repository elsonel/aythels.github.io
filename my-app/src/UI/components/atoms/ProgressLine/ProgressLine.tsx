import React from 'react';
import styled from 'styled-components';
import { Theme } from '../../../utility/themes/Theme';

export interface ProgressLineProps
  extends React.HTMLAttributes<HTMLDivElement> {
  lineStart?: number | string;
  lineWidth?: number | string;
  backLineColor?: string;
  frontLineColor?: string;
}

export const ProgressLine: React.FC<ProgressLineProps> = ({
  lineStart = 0,
  lineWidth = 100,
  backLineColor = Theme.color.outline,
  frontLineColor = Theme.color.text,
  ...props
}): React.ReactElement => {
  return (
    <Wrapper {...props}>
      <BackLine $color={backLineColor} />
      <FrontLine
        $color={frontLineColor}
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
  $color: string;
}>`
  position: absolute;

  height: 100%;
  width: ${({ $lineWidth }) => $lineWidth};
  left: min(max(${({ $lineStart }) => $lineStart}, 0px), 100%);
  bottom: 0px;

  background: ${({ $color }) => $color};
  transition: ${({ theme }) => `${theme.speed.normal}`};
`;

const BackLine = styled.div<{ $color: string }>`
  position: absolute;
  width: 100%;
  left: 0px;
  bottom: 0px;

  border-bottom: 1px solid ${({ theme }) => theme.color.outline};
`;
