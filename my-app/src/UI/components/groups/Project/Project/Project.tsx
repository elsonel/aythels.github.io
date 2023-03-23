import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ProjectLanding } from '../../../atoms/ProjectLanding';
import { ScrollHandler } from '../../../inputs/ScrollHandler';
import { ProjectLayout } from '../ProjectLayout';
import { ProjectSectionProps } from '../ProjectSection';

export interface ProjectProps extends React.HTMLAttributes<HTMLDivElement> {
  landingTitle?: string;
  landingSubtitle?: string;
  landingSrc: string;
  children: React.ReactElement<ProjectSectionProps>[];
}

export const Project: React.FC<ProjectProps> = ({
  landingTitle,
  landingSubtitle,
  landingSrc,
  children,
  ...props
}): React.ReactElement => {
  const [isLandingVisible, setIsLandingVisible] = useState(true);
  const [isScrollLocked, setIsScrollLocked] = useState(true);

  const onDown = () => {
    if (isLandingVisible) {
      setIsLandingVisible(false);
      setIsScrollLocked(true);
    }
  };

  const onUp = () => {
    if (window.pageYOffset === 0 && !isLandingVisible) {
      setIsLandingVisible(true);
      setIsScrollLocked(true);
    }
  };

  const onScroll = useCallback(() => {
    onDown();
    if (isScrollLocked) document.documentElement.scrollTop = 0;
  }, [isScrollLocked]);

  return (
    <ScrollHandler
      onDown={onDown}
      onUp={onUp}
      onScrollWindow={onScroll}
      {...props}
    >
      <ProjectLayout
        isLandingVisible={isLandingVisible}
        onLandingClick={onDown}
        onLandingClose={() => setIsScrollLocked(false)}
      >
        {[
          <ProjectLanding
            key={'landing'}
            title={landingTitle}
            subtitle={landingSubtitle}
            src={landingSrc}
          />,
          ...children,
        ]}
      </ProjectLayout>
    </ScrollHandler>
  );
};
