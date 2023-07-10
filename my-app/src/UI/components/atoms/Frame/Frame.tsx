import React, { useMemo } from 'react';
import styled, { css, Keyframes, keyframes, useTheme } from 'styled-components';
import { GreaterThanHook } from '../../../utilities/hooks/ResponsiveProps';
import { GlobalScrollHidden } from '../../../utilities/styles/GlobalStyles';

export interface IFrameProps extends React.HTMLAttributes<HTMLDivElement> {
  isLoaded?: boolean;
  delay?: number;
  isAnimating?: boolean;
}

export const Frame: React.FC<IFrameProps> = ({
  isLoaded = true,
  delay = 0,
  isAnimating = true,
  ...props
}): React.ReactElement => {
  const { breakpoint } = useTheme();

  const isDesktop = GreaterThanHook(breakpoint.header);

  const isScrollbarShown = useMemo(
    () => !isDesktop && <GlobalScrollHidden />,
    [isDesktop]
  );

  return (
    <>
      {isScrollbarShown}
      <Wrapper $isDesktop={isDesktop} {...props}>
        <TransparentTop />
        {isDesktop && (
          <>
            <TransparentLeft />
            <TransparentBottom />
            <Left
              $isLoaded={isLoaded}
              $delay={delay}
              $isAnimating={isAnimating}
            />
            <BottomRight
              $isLoaded={isLoaded}
              $delay={delay}
              $isAnimating={isAnimating}
            />
          </>
        )}
        <Top $isLoaded={isLoaded} $delay={delay} $isAnimating={isAnimating} />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div<{ $isDesktop: boolean }>`
  box-sizing: border-box;
  position: fixed;
  top: 0px;
  left: 0px;
  width: ${({ theme, $isDesktop }) =>
    `calc(100vw - ${$isDesktop ? theme.size.padding : 0}px)`};
  height: ${({ theme }) => `calc(100dvh - ${theme.size.padding}px)`};
  min-height: ${({ theme }) => theme.size.frameMinHeight}px;
  pointer-events: none;
`;

const AnimationBase = css<{
  $isLoaded: boolean;
  $delay: number;
  $isAnimating: boolean;
}>`
  animation-fill-mode: forwards;
  animation-duration: ${({ theme }) => theme.speed.slow}ms;
  animation-delay: ${({ $isLoaded, $delay }) => ($isLoaded ? $delay : 0)}ms;

  ${({ $isAnimating }) =>
    !$isAnimating && `animation-duration: 0ms; animation-delay: 0ms;`};
`;

const AnimationName = (animation: (props: any) => Keyframes) => css`
  animation-name: ${animation};
`;

const BottomRightAnimation = () => keyframes`
  0% {
    width: 0%;
    height: 0%;
    opacity: 0;
  }
  100% {
    width: 100%;
    height: 100%;
    opacity: 1;
  }
`;

const BottomRight = styled.div<{
  $isLoaded: boolean;
  $delay: number;
  $isAnimating: boolean;
}>`
  box-sizing: border-box;
  position: absolute;
  right: 0px;
  bottom: 0px;
  width: 0px;
  height: 0px;
  border-right: 1px solid ${({ theme }) => theme.color.outline};
  border-bottom: 1px solid ${({ theme }) => theme.color.outline};
  border-bottom-right-radius: 8px;
  opacity: 0;

  ${AnimationBase}
  ${({ $isLoaded }) => $isLoaded && AnimationName(BottomRightAnimation)}
`;

const TopAnimation = () => keyframes`
  0% {
    width: 0%;
    opacity: 0;
  }
  100% { 
    width: 100%;
    opacity: 1;
  }
`;

const Top = styled.div<{
  $isLoaded: boolean;
  $delay: number;
  $isAnimating: boolean;
}>`
  box-sizing: border-box;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 0px;
  height: ${({ theme }) => theme.size.headerHeight}px;
  border-bottom: 1px solid ${({ theme }) => theme.color.outline};
  opacity: 0;

  ${AnimationBase}
  ${({ $isLoaded }) => $isLoaded && AnimationName(TopAnimation)}
`;

const LeftAnimation = () => keyframes`
  0% {
    height: 0%;
    opacity: 0;
  }
  100% { 
    height: 100%;
    opacity: 1;
  }
`;

const Left = styled.div<{
  $isLoaded: boolean;
  $delay: number;
  $isAnimating: boolean;
}>`
  box-sizing: border-box;
  position: absolute;
  top: 0px;
  left: 0px;
  width: ${({ theme }) => theme.size.headerHeight}px;
  height: 0px;

  border-right: 1px solid ${({ theme }) => theme.color.outline};
  opacity: 0;

  ${AnimationBase}
  ${({ $isLoaded }) => $isLoaded && AnimationName(LeftAnimation)}
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
  height: ${({ theme }) => theme.size.headerHeight}px;
`;

const TransparentLeft = styled(Transparent)`
  top: ${({ theme }) => theme.size.headerHeight}px;
  left: 0px;
  width: ${({ theme }) => theme.size.headerHeight}px;
  height: ${({ theme }) => `calc(100% - ${theme.size.headerHeight}px)`};
`;

const TransparentBottom = styled(Transparent)`
  top: 100%;
  left: 0px;
  width: 100%;
  height: ${({ theme }) => theme.size.padding}px;
`;
