import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { ProjectSectionProps } from '../ProjectSection';
import { ScrollHandler } from '../../inputs/ScrollHandler';
import { ProjectLandingProps } from '../../atoms/ProjectLanding';
import { ProjectMenu } from '../../atoms/ProjectMenu';
import { LessThan } from '../../../utility/ResponsiveCSS';
import useOnScreen from '../../../utility/useOnScreen';

const TOP_OFFSET = 64;
const MENU_WIDTH = 220;
let timeout: any = null;
let isScrollLocked: boolean = true;

export interface ProjectProps extends React.HTMLAttributes<HTMLDivElement> {
  landingComponent: React.ReactElement<ProjectLandingProps>;
  children?: React.ReactElement<ProjectSectionProps>[];
}

export const Project: React.FC<ProjectProps> = ({
  landingComponent,
  children = [],
  ...props
}): React.ReactElement => {
  const [isLandingVisible, setIsLandingVisible] = useState(true);
  const allRefs = children.map(() => useRef<HTMLDivElement>(null));
  const allIsOnScreen = allRefs.map((ref) =>
    useOnScreen(ref, [], {
      root: document,
      rootMargin: `-${TOP_OFFSET + 1}px 0px 0px 0px`,
    })
  );

  useEffect(() => {
    clearTimeout(timeout);

    if (isLandingVisible) isScrollLocked = true;
    else if (!isLandingVisible)
      timeout = setTimeout(() => (isScrollLocked = false), 400);
  }, [isLandingVisible]);

  const onDown = () => {
    setIsLandingVisible(false);
  };

  const onUp = () => {
    if (window.pageYOffset === 0) setIsLandingVisible(true);
  };

  const onScroll = () => {
    onDown();
    if (isScrollLocked) document.documentElement.scrollTop = 0;
  };

  const scrollToRef = (index: number) => {
    const top = allRefs[index].current!.getBoundingClientRect().top;
    const offset = top + window.pageYOffset + -TOP_OFFSET;

    window.scrollTo({
      top: offset,
      behavior: 'smooth',
    });
  };

  return (
    <Wrapper {...props}>
      <ScrollHandler onDown={onDown} onUp={onUp} onScrollWindow={onScroll}>
        <WrapperPosition>
          <Internal>
            <Menu>
              <ProjectMenu
                tabs={children.map((e, i) => {
                  return {
                    label: e.props.title ? e.props.title : '',
                    isSelected: allIsOnScreen[i] && !allIsOnScreen[i - 1],
                    onClick: () => scrollToRef(i),
                  };
                })}
                isVisible={!isLandingVisible}
                subtitle={landingComponent.props.subtitle}
                title={landingComponent.props.title}
              />
            </Menu>
            <Content $isLandingVisible={isLandingVisible}>
              <ContentGap $isLandingVisible={isLandingVisible} />
              {children.map((e, i) => (
                <div ref={allRefs[i]} key={i}>
                  {e}
                </div>
              ))}
            </Content>
            <MenuPlaceholder />
          </Internal>
        </WrapperPosition>
      </ScrollHandler>
      <Landing onClick={onDown} $isLandingVisible={isLandingVisible}>
        {landingComponent}
      </Landing>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: ${TOP_OFFSET}px;
  width: 100%;
  //background: green;
`;

const WrapperPosition = styled.div`
  position: relative;
  width: 100%;
`;

const Internal = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Menu = styled.div`
  align-self: flex-start;

  position: sticky;
  top: ${TOP_OFFSET}px;
  width: ${MENU_WIDTH}px;

  //background: pink;

  > * {
    width: 100%;
  }

  ${LessThan(
    1000,
    `
    display: none;
  `
  )}
`;

const Content = styled.div<{ $isLandingVisible: boolean }>`
  width: min(700px, calc(100% - ${MENU_WIDTH * 2}px));
  //background: yellow;

  opacity: ${({ $isLandingVisible }) => ($isLandingVisible ? 0 : 1)};
  transition: ${({ theme }) => theme.speed.slow};
  transition-property: opacity;

  ${LessThan(
    1000,
    `
    width: 100%;
  `
  )}

  > * {
    width: 100%;
  }
`;

const ContentGap = styled.div<{ $isLandingVisible: boolean }>`
  height: ${({ $isLandingVisible }) =>
    $isLandingVisible ? `calc(100vh - ${TOP_OFFSET}px)` : `0px`};
  transition: ${({ theme }) => theme.speed.slow};
  //background: teal;
`;

const MenuPlaceholder = styled.div`
  width: ${MENU_WIDTH}px;
  //background: orange;

  ${LessThan(
    1000,
    `
    display: none;
  `
  )}
`;

const Landing = styled.div<{ $isLandingVisible: boolean }>`
  position: fixed;
  top: ${TOP_OFFSET}px;
  left: 0px;

  width: 100%;
  height: calc(100vh - ${TOP_OFFSET}px);

  //background: black;

  cursor: pointer;
  opacity: ${({ $isLandingVisible }) => ($isLandingVisible ? 1 : 0)};
  pointer-events: ${({ $isLandingVisible }) =>
    $isLandingVisible ? 'auto' : 'none'};
  transition: ${({ theme }) => theme.speed.normal};
  transition-property: opacity;

  > * {
    width: 100%;
    height: 100%;
  }
`;
