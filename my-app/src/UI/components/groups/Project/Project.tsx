import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { ProjectSectionProps } from '../ProjectSection';
import { ProjectLandingProps } from '../../atoms/ProjectLanding';
import { ProjectMenuHorizontal } from '../../atoms/ProjectMenuHorizontal';
import useOnScreen from '../../../utility/hooks/useOnScreen';
import { Theme } from '../../../utility/themes/Theme';
import useOnWindowScrollTop from '../../../utility/hooks/useOnWindowScrollTop';
import { LessThan } from '../../../utility/styles/ResponsiveCSS';

const TIMELINE_HEIGHT = 40;
const TOLERANCE = 4;
const TOP_OFFSET = Theme.size.header - TOLERANCE + TIMELINE_HEIGHT;

function renderMenu(
  sections: React.ReactElement<ProjectSectionProps>[],
  allRefs: React.RefObject<HTMLDivElement>[],
  allIsOnScreen: boolean[],
  scrollProgress: number
) {
  return (
    <ProjectMenuHorizontal
      progress={scrollProgress}
      tabs={sections.map((e, i) => {
        return {
          label: e.props.title ? e.props.title : '',
          isActive: allIsOnScreen[i] && !allIsOnScreen[i - 1],
          onClick: () => scrollToRef(allRefs[i]),
        };
      })}
    />
  );
}

function getProgress(
  allRefs: React.RefObject<HTMLDivElement>[],
  allIsOnScreen: boolean[]
) {
  let index = allIsOnScreen.findIndex(
    (e, i) => allIsOnScreen[i] && !allIsOnScreen[i - 1]
  );

  const ref = allRefs[index];
  if (!ref || !ref.current) return 0;

  const coords = ref.current.getBoundingClientRect();
  const NUMERATOR = coords.top - TOP_OFFSET;
  const TOTAL = coords.height;
  const PERCENT = Math.max(0, Math.min(Math.abs(NUMERATOR / TOTAL), 1));

  // This is the length of each segment
  const fraction = 1 / (allRefs.length + 1);

  // This is the section scroll percentage remapped to the entire progress bar length
  const truePercent = fraction * PERCENT;

  // This is adding the previous sections that come before the current section to the progress b ar
  const withAddition = truePercent + (index + 1) * fraction;

  return withAddition;
}

const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
  if (!ref || !ref.current) return;

  const top = ref.current.getBoundingClientRect().top;
  const offset = top + window.pageYOffset + -TOP_OFFSET;

  window.scrollTo({
    top: offset,
    behavior: 'smooth',
  });
};

export interface ProjectProps extends React.HTMLAttributes<HTMLDivElement> {
  children: [
    React.ReactElement<ProjectLandingProps>,
    ...React.ReactElement<ProjectSectionProps>[]
  ];
  isLandingVisible?: boolean;
}

console.warn('This probably needs to be optimized!');

export const Project: React.FC<ProjectProps> = ({
  children,
  isLandingVisible = true,
  ...props
}): React.ReactElement => {
  const [landing, ...sections] = children;
  const [lastScrollProgress, setLastScrollProgress] = useState(-1);
  const [scrollProgress, setScrollProgress] = useState(0);
  const allRefs = sections.map(() => useRef<HTMLDivElement>(null));
  const allIsOnScreen = allRefs.map((ref) =>
    useOnScreen(ref, [], {
      root: document,
      rootMargin: `-${TOP_OFFSET + 1}px 0px 0px 0px`,
    })
  );

  const scrollTop = useOnWindowScrollTop();
  useEffect(() => {
    const STEPS = 0.05;
    const FRACTION = 1 / (sections.length + 1);

    // First step:
    if (lastScrollProgress === -1) {
      setLastScrollProgress(scrollProgress);
      setScrollProgress(FRACTION);

      return;
    }

    // Usual steps to take
    let currentProgress = getProgress(allRefs, allIsOnScreen);

    if (Math.abs(currentProgress - lastScrollProgress) > STEPS) {
      const remainder = currentProgress % FRACTION;

      if (remainder < STEPS * 2) {
        currentProgress -= remainder;
      } else if (remainder + STEPS * 2 > FRACTION) {
        currentProgress += FRACTION - remainder;
      }

      setLastScrollProgress(scrollProgress);
      setScrollProgress(currentProgress);
    }
  }, [scrollTop]);

  return (
    <div {...props}>
      <Content>
        <Header $isLandingVisible={isLandingVisible}>
          <HeaderTopGap />
          {renderMenu(sections, allRefs, allIsOnScreen, scrollProgress)}
        </Header>
        <SectionWrapper $isLandingVisible={isLandingVisible}>
          {sections.map((e, i) => (
            <div ref={allRefs[i]} key={i}>
              {e}
            </div>
          ))}
        </SectionWrapper>
      </Content>
      <LandingWrapper $isLandingVisible={isLandingVisible}>
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

  transition-duration: ${({ theme }) => theme.speed.normal};
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
  height: ${({ theme }) => theme.size.header - TOLERANCE}px;

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

  transition-duration: ${({ theme }) => theme.speed.fast};
  transition-delay: ${({ $isLandingVisible, theme }) =>
    $isLandingVisible ? 0 : theme.speed.fast};
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

  transition-duration: ${({ theme }) => theme.speed.normal};
  transition-delay: ${({ $isLandingVisible, theme }) =>
    $isLandingVisible ? 0 : theme.speed.normal};
  transition-property: opacity, transform;
`;
