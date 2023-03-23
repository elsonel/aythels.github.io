import React from 'react';
import styled, { css, Keyframes, keyframes, useTheme } from 'styled-components';
import { GreaterThanHook } from '../../../utility/hooks/ResponsiveProps';

export interface IFrameProps extends React.HTMLAttributes<HTMLDivElement> {
  isLoaded?: boolean;
  delay?: number;
}

export const Frame: React.FC<IFrameProps> = ({
  isLoaded = true,
  delay = 0,
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
          <Left $isLoaded={isLoaded} $delay={delay} />
          <BottomRight $isLoaded={isLoaded} $delay={delay} />
        </>
      )}
      <Top $isLoaded={isLoaded} $delay={delay} $isDesktop={isDesktop} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow: hidden;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  height: 100dvh;
  min-height: ${({ theme }) => theme.size.frameMinHeight}px;
  pointer-events: none;
`;

const AnimationBase = (animation: (props: any) => Keyframes) => css`
  animation-fill-mode: forwards;
  animation-duration: ${({ theme }) => theme.speed.slow}ms;
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

const BottomRight = styled.div<{ $isLoaded: boolean; $delay: number }>`
  position: absolute;
  right: ${({ theme }) => theme.size.padding}px;
  bottom: ${({ theme }) => theme.size.padding}px;
  width: 0px;
  height: 0px;
  border-right: 1px solid ${({ theme }) => theme.color.outline};
  border-bottom: 1px solid ${({ theme }) => theme.color.outline};
  border-bottom-right-radius: 8px;
  opacity: 0;

  ${({ $isLoaded }) => $isLoaded && AnimationBase(BottomRightAnimation)}
  ${({ $isLoaded, $delay }) => $isLoaded && `animation-delay: ${$delay}ms;`}
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

const Top = styled.div<{
  $isDesktop: boolean;
  $isLoaded: boolean;
  $delay: number;
}>`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 0px;
  height: ${({ theme }) => theme.size.headerHeight}px;
  border-bottom: 1px solid ${({ theme }) => theme.color.outline};
  opacity: 0;

  ${({ $isLoaded }) => $isLoaded && AnimationBase(TopAnimation)}
  ${({ $isLoaded, $delay }) => $isLoaded && `animation-delay: ${$delay}ms;`}
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

const Left = styled.div<{ $isLoaded: boolean; $delay: number }>`
  position: absolute;
  top: 0px;
  left: 0px;
  width: ${({ theme }) => theme.size.headerHeight}px;
  height: 0px;
  border-right: 1px solid ${({ theme }) => theme.color.textNeutral};
  opacity: 0;

  ${({ $isLoaded }) => $isLoaded && AnimationBase(LeftAnimation)}
  ${({ $isLoaded, $delay }) => $isLoaded && `animation-delay: ${$delay}ms;`}
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
