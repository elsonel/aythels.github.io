import React from 'react';
import styled, { css, Keyframes, keyframes, useTheme } from 'styled-components';
import { GreaterThanHook } from '../../../utility/hooks/ResponsiveProps';

export interface IFrameProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Frame: React.FC<IFrameProps> = ({
  ...props
}): React.ReactElement => {
  const { breakpoint } = useTheme();
  const isDesktop = GreaterThanHook(breakpoint.header);

  return (
    <Wrapper {...props}>
      <TransparentTop $isDesktop={isDesktop} />
      {isDesktop && (
        <>
          <TransparentLeft />
          <TransparentBottom />
          <Left />
          <BottomRight />
        </>
      )}
      <Top $isDesktop={isDesktop} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  z-index: ${({ theme }) => theme.layer.header};
  overflow: hidden;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  min-height: ${({ theme }) =>
    theme.size.headerHeight * 3 + theme.size.padding}px;
  pointer-events: none;
`;

const AnimationBase = (animation: (props: any) => Keyframes) => css`
  animation-fill-mode: forwards;
  animation-duration: ${({ theme }) => theme.speed.loading}ms;
  animation-name: ${animation};
`;

const BottomRightAnimation = ({ theme }: any) => keyframes`
  0% {
    width: 0px;
    height: 0px;
    opacity: 0;
  }
  100% {
    width: calc(100% - ${theme.size.padding}px);
    height: calc(100% - ${theme.size.padding}px);
    opacity: 1;
  }
`;

const BottomRight = styled.div`
  position: absolute;
  right: ${({ theme }) => theme.size.padding}px;
  bottom: ${({ theme }) => theme.size.padding}px;
  width: 0px;
  height: 0px;
  border-right: 1px solid ${({ theme }) => theme.color.outline};
  border-bottom: 1px solid ${({ theme }) => theme.color.outline};
  border-bottom-right-radius: 8px;
  opacity: 0;

  ${AnimationBase(BottomRightAnimation)}
`;

const TopAnimation = ({ theme, $isDesktop }: any) => keyframes`
  0% {
    width: 0px;
    opacity: 0;
  }
  100% { 
    width: calc(
      100% - ${$isDesktop ? theme.size.padding : 0}px
    );
    opacity: 1;
  }
`;

const Top = styled.div<{ $isDesktop: boolean }>`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 0px;
  height: ${({ theme }) => theme.size.headerHeight}px;
  border-bottom: 1px solid ${({ theme }) => theme.color.outline};
  opacity: 0;

  ${AnimationBase(TopAnimation)}
`;

const LeftAnimation = ({ theme }: any) => keyframes`
  0% {
    height: 0px;
    opacity: 0;
  }
  100% { 
    height: calc(100% - ${theme.size.padding}px);
    opacity: 1;
  }
`;

const Left = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: ${({ theme }) => theme.size.headerHeight}px;
  height: 0px;
  border-right: 1px solid ${({ theme }) => theme.color.outline};
  opacity: 0;

  ${AnimationBase(LeftAnimation)}
`;

const Transparent = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.color.transparentWhite};
  pointer-events: auto;
`;

const TransparentTop = styled(Transparent)<{ $isDesktop: boolean }>`
  top: 0px;
  left: ${({ $isDesktop, theme }) =>
    $isDesktop ? theme.size.headerHeight : 0}px;
  width: 100%;
  height: ${({ theme }) => theme.size.headerHeight}px;
`;

const TransparentLeft = styled(Transparent)`
  top: 0px;
  left: 0px;
  width: ${({ theme }) => theme.size.headerHeight}px;
  height: 100%;
`;

const TransparentBottom = styled(Transparent)`
  bottom: 0px;
  left: ${({ theme }) => theme.size.headerHeight}px;
  width: 100%;
  height: ${({ theme }) => theme.size.padding}px;
`;
