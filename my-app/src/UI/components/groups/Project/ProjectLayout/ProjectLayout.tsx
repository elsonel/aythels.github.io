import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { ProjectSectionProps } from '../ProjectSection';
import { ProjectLandingProps } from '../../../atoms/ProjectLanding';
import { ProjectMenuHorizontal } from '../../../atoms/ProjectMenuHorizontal';
import useOnScreen from '../../../../utilities/hooks/useOnScreen';
import { Theme } from '../../../../utilities/themes/Theme';
import { LessThan } from '../../../../utilities/styles/ResponsiveCSS';
import { clamp } from '../../../../utilities/scripts/Math';
import useOnWindowScroll from '../../../../utilities/hooks/useOnWindowScroll';

const HEADER_HEIGHT = Theme.size.headerHeight;
const TIMELINE_HEIGHT = 40;
const TOP_TOLERANCE = 4;
const TOP_OFFSET = HEADER_HEIGHT + TIMELINE_HEIGHT - TOP_TOLERANCE;

function renderMenu(
  allSections: React.ReactElement<ProjectSectionProps>[],
  allElements: HTMLDivElement[],
  selectedIndex: number,
  scrollProgress: number
) {
  if (!allElements[selectedIndex]) return;

  return (
    <ProjectMenuHorizontal
      progress={snapProgress(scrollProgress, 1 / (allSections.length + 1))}
      tabs={allSections.map((e, i) => {
        return {
          label: e.props.title ? e.props.title : '',
          isActive: i === selectedIndex,
          onClick: () => scrollToElement(allElements[i]),
        };
      })}
    />
  );
}

function snapProgress(progress: number, factor: number): number {
  // snap the progress to its nearest factor

  const TOLERANCE = 0.02;

  // 0.26 % 0.25 = 0.01 < 0.05
  const remainder = progress % factor;

  if (remainder < TOLERANCE) {
    return progress - remainder;
  } else if (remainder + TOLERANCE > factor) {
    // 0.72 % 0.25 = 0.22 + 0.05 > 0.25
    return snapProgress(progress + TOLERANCE, factor);
  }

  return progress;
}

function remapLocalProgress(
  allElements: HTMLDivElement[],
  selectedIndex: number,
  localProgress: number
) {
  if (!allElements[selectedIndex] || !allElements[selectedIndex]) return 0;

  const segmentLength = 1 / (allElements.length + 1);
  const backSegmentLength = segmentLength * (selectedIndex + 1);
  const remappedProgress = localProgress * segmentLength;

  return backSegmentLength + remappedProgress;
}

function getLocalProgress(selectedElement: HTMLDivElement) {
  const refCoords = selectedElement.getBoundingClientRect();
  const refProgress = refCoords.top - TOP_OFFSET;
  const refHeight = refCoords.height;

  const progressToNextRef = clamp(-refProgress / refHeight, 0, 1);
  return progressToNextRef;
}

const scrollToElement = (element: HTMLDivElement) => {
  const refTop = element.getBoundingClientRect().top;
  const currentScroll = window.pageYOffset;

  const scrollY = refTop + currentScroll - TOP_OFFSET;

  window.scrollTo({
    top: scrollY,
    behavior: 'smooth',
  });
};

export interface ProjectLayoutProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: [
    React.ReactElement<ProjectLandingProps>,
    ...React.ReactElement<ProjectSectionProps>[]
  ];
  isLandingVisible?: boolean;
  onLandingClick?: () => void;
  onLandingClose?: () => void;
}

export const ProjectLayout: React.FC<ProjectLayoutProps> = ({
  children,
  isLandingVisible = false,
  onLandingClick,
  onLandingClose,
  ...props
}): React.ReactElement => {
  const [landing, ...sections] = children;

  const [scrollProgress, setScrollProgress] = useState(-1);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [scrollTop, setScrollTop] = useState(0);

  useOnWindowScroll((scrollTop) => setScrollTop(scrollTop));
  const allRefs = useRef<HTMLDivElement[]>([]);

  const allIsOnScreen = allRefs.current.map((ref) =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useOnScreen(ref, {
      root: document,
      rootMargin: `-${TOP_OFFSET + 1}px 0px 0px 0px`,
    })
  );

  useEffect(() => {
    // When the page loads for the first time, set the initial progress to the first step
    if (scrollProgress === -1) {
      setScrollProgress(1 / (sections.length + 1));
      return;
    }

    const TOLERANCE = 0.02;
    const localProgress = allRefs.current[selectedIndex]
      ? getLocalProgress(allRefs.current[selectedIndex])
      : 0;
    const remappedProgress = remapLocalProgress(
      allRefs.current,
      selectedIndex,
      localProgress
    );
    if (Math.abs(remappedProgress - scrollProgress) > TOLERANCE)
      setScrollProgress(remappedProgress);
  }, [allRefs, scrollProgress, scrollTop, sections.length, selectedIndex]);

  useEffect(() => {
    setSelectedIndex(
      allIsOnScreen.findIndex(
        (e, i) => allIsOnScreen[i] && !allIsOnScreen[i - 1]
      )
    );
  }, [allIsOnScreen]);

  return (
    <div {...props}>
      <Content>
        <Header $isLandingVisible={isLandingVisible}>
          <HeaderTopGap />
          {renderMenu(sections, allRefs.current, selectedIndex, scrollProgress)}
        </Header>
        <SectionWrapper $isLandingVisible={isLandingVisible}>
          {sections.map((e, i) => (
            <div ref={(node) => node && (allRefs.current[i] = node)} key={i}>
              {e}
            </div>
          ))}
        </SectionWrapper>
      </Content>
      <LandingWrapper
        $isLandingVisible={isLandingVisible}
        onClick={onLandingClick}
        onTransitionEnd={!isLandingVisible ? onLandingClose : undefined}
      >
        {landing}
      </LandingWrapper>
    </div>
  );
};

const LandingWrapper = styled.div<{ $isLandingVisible: boolean }>`
  z-index: 2;
  position: fixed;
  width: 100%;
  top: 0px;
  left: 0px;

  opacity: ${({ $isLandingVisible }) => ($isLandingVisible ? 1 : 0)};
  pointer-events: ${({ $isLandingVisible }) =>
    $isLandingVisible ? 'auto' : 'none'};

  transition-duration: ${({ theme }) => theme.speed.normal}ms;
  transition-property: opacity, transform;
`;

const Content = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderTopGap = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.size.headerHeight - TOP_TOLERANCE}px;

  background: ${({ theme }) => theme.color.background};
`;

const Header = styled.div<{ $isLandingVisible: boolean }>`
  z-index: 1;
  position: sticky;
  width: 100%;
  top: 0px;

  transform: ${({ $isLandingVisible }) =>
    $isLandingVisible ? 'translateY(-120px)' : 'translateY(0px)'};
  opacity: ${({ $isLandingVisible }) => ($isLandingVisible ? 0 : 1)};

  transition-duration: ${({ theme }) => theme.speed.fast}ms;
  transition-delay: ${({ $isLandingVisible, theme }) =>
    $isLandingVisible ? 0 : theme.speed.fast}ms;
  transition-property: opacity, transform;

  ${LessThan(
    800,
    ` 
      position: static; 
      > * {
        &:last-child {
          display: none;
        }
      } 
    
    `
  )}
`;

const SectionWrapper = styled.div<{ $isLandingVisible: boolean }>`
  z-index: 0;
  position: relative;

  transform: ${({ $isLandingVisible }) =>
    $isLandingVisible ? 'translateY(25vh)' : 'translateY(0px)'};
  width: min(100%, 800px);
  opacity: ${({ $isLandingVisible }) => ($isLandingVisible ? 0 : 1)};

  transition-duration: ${({ theme }) => theme.speed.normal}ms;
  transition-delay: ${({ $isLandingVisible, theme }) =>
    $isLandingVisible ? 0 : theme.speed.normal}ms;
  transition-property: opacity, transform;
`;
