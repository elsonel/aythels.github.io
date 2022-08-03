import React, { SyntheticEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ProjectSection } from '../../groups/ProjectSection';
import { ScrollHandler } from '../../inputs/ScrollHandler';

let timeout: any = null;
let isScrollLocked: boolean = true;

export interface ProjectLandingProps
  extends React.HTMLAttributes<HTMLDivElement> {
  isLandingVisible: boolean;
}

export const ProjectLanding: React.FC<ProjectLandingProps> = ({
  isLandingVisible,
  children,
  ...props
}): React.ReactElement => {
  const [isVisible, setIsVisible] = useState(isLandingVisible);

  useEffect(() => {
    clearTimeout(timeout);

    if (isVisible) isScrollLocked = true;
    else if (!isVisible)
      timeout = setTimeout(() => (isScrollLocked = false), 400);
  }, [isVisible]);

  const onDown = () => {
    setIsVisible(false);
  };

  const onUp = () => {
    if (window.pageYOffset === 0) setIsVisible(true);
  };

  const onScroll = () => {
    onDown();
    if (isScrollLocked) document.documentElement.scrollTop = 0;
  };

  return (
    <Wrapper {...props}>
      <ScrollHandler onDown={onDown} onUp={onUp} onScrollWindow={onScroll}>
        <ContentWrapper $isVisible={isVisible}>
          <ProjectSection title="OVERVIEW" children={[]} />
        </ContentWrapper>
        <ImageWrapper onClick={onDown} $isVisible={isVisible} />
      </ScrollHandler>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const ImageWrapper = styled.div<{ $isVisible: boolean }>`
  position: fixed;
  top: 0px;
  left: 0px;

  width: 100vw;
  height: 100vh;

  background: yellow;

  user-select: none;
  cursor: pointer;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  pointer-events: ${({ $isVisible }) => ($isVisible ? 'auto' : 'none')};
  transition: ${({ theme }) => theme.speed.normal};
`;

const ContentWrapper = styled.div<{ $isVisible: boolean }>`
  position: absolute;
  top: ${({ $isVisible }) => ($isVisible ? '50%' : '0%')};
  left: 0px;
  width: 100%;

  opacity: ${({ $isVisible }) => ($isVisible ? 0 : 1)};
  transition: ${({ theme }) => theme.speed.normal};
`;
