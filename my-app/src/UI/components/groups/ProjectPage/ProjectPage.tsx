import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { GreaterThanQuery } from '../../../utility/styles/ResponsiveCSS';
import { FrameLayout } from '../../layout/FrameLayout/FrameLayout';
import { FrameLayoutSticky } from '../../layout/FrameLayoutSticky/FrameLayoutSticky';
import { FadeIn } from '../../other/FadeIn/FadeIn';
import { ProjectHoverText } from './ProjectHoverText/ProjectHoverText';
import { ProjectData, ProjectList } from './ProjectList/ProjectList';

export interface IProjectPageProps
  extends React.HTMLAttributes<HTMLDivElement> {
  projectData: ProjectData[];
  defaultHoverText: string;
  isLoaded?: boolean;
  delay?: number;
}

export const ProjectPage: React.FC<IProjectPageProps> = ({
  projectData,
  defaultHoverText,
  isLoaded = true,
  delay = 0,
}): React.ReactElement => {
  const [hoveredData, setHoveredData] = useState<{
    index?: number;
    text: string;
  }>({
    index: undefined,
    text: defaultHoverText,
  });

  return (
    <>
      <FrameLayout>
        <FadeIn offset="-100%" delay={delay} duration={600} isLoaded={isLoaded}>
          <ProjectList
            projectData={projectData}
            onHoverEnter={(i) =>
              setHoveredData({ index: i, text: projectData[i].description })
            }
            onHoverLeave={() =>
              setHoveredData({
                index: undefined,
                text: defaultHoverText,
              })
            }
          />
        </FadeIn>
      </FrameLayout>
      <FrameLayoutSticky>
        <LeftPosition>
          <FadeIn delay={delay + 400} isLoaded={isLoaded} offset={20}>
            <ProjectHoverText number={hoveredData.index}>
              {hoveredData.text}
            </ProjectHoverText>
          </FadeIn>
        </LeftPosition>
      </FrameLayoutSticky>
    </>
  );
};

const LeftPosition = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  padding: 30px 20px;
  ${GreaterThanQuery(
    0,
    0,
    `
      opacity: 0; 
      pointer-events: none; 
      user-select: none;
    `
  )}
  ${GreaterThanQuery(
    1100,
    500,
    `
      opacity: 1; 
      pointer-events: auto; 
      user-select: auto;
    `
  )}
`;
