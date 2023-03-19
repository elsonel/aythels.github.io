import React from 'react';
import styled from 'styled-components';
import { GreaterThanHook } from '../../../utility/hooks/ResponsiveProps';

export interface IFrameProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Frame: React.FC<IFrameProps> = ({
  ...props
}): React.ReactElement => {
  const isDesktop = GreaterThanHook(800);

  return (
    <Wrapper {...props}>
      <TransparentTop />
      {isDesktop ? (
        <>
          <TransparentLeft />
          <TransparentBottom />
          <TopLeft />
          <BottomRight />
          <Corner />
        </>
      ) : (
        <TopMobile />
      )}
    </Wrapper>
  );
};

const HEADER_WIDTH = 52;
const PADDING = 20;

const Wrapper = styled.div`
  z-index: ${({ theme }) => theme.layer.header};
  overflow: hidden;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  pointer-events: none;
`;

const Overlay = styled.div`
  position: absolute;
  border: 1px solid ${({ theme }) => theme.color.outline};
`;

const TopMobile = styled(Overlay)`
  top: 0px;
  left: 0px;
  width: 100%;
  height: ${HEADER_WIDTH}px;

  border-top: none;
  border-left: none;
  border-right: none;
`;

const Corner = styled(Overlay)`
  top: 0px;
  left: 0px;
  width: ${HEADER_WIDTH}px;
  height: ${HEADER_WIDTH}px;

  border-top: none;
  border-left: none;
`;

const TopLeft = styled(Overlay)`
  top: ${HEADER_WIDTH}px;
  left: ${HEADER_WIDTH}px;
  width: calc(100% - ${HEADER_WIDTH}px - ${PADDING}px);
  height: calc(100% - ${HEADER_WIDTH}px - ${PADDING}px);

  border-right: none;
  border-bottom: none;
`;

const BottomRight = styled(Overlay)`
  top: 0px;
  left: 0px;
  width: calc(100% - ${PADDING}px);
  height: calc(100% - ${PADDING}px);
  border-top: none;
  border-left: none;
  border-bottom-right-radius: 8px;
`;

const Transparent = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.color.transparentWhite};
  pointer-events: auto;
`;

const TransparentTop = styled(Transparent)`
  top: 0px;
  left: 0px;
  width: 100%;
  height: ${HEADER_WIDTH}px;
`;

const TransparentLeft = styled(Transparent)`
  top: ${HEADER_WIDTH}px;
  left: 0px;
  width: ${HEADER_WIDTH}px;
  height: calc(100% - ${HEADER_WIDTH}px - ${PADDING}px);
`;

const TransparentBottom = styled(Transparent)`
  top: calc(100% - ${PADDING}px);
  left: 0px;
  width: 100%;
  height: ${PADDING}px;
`;
