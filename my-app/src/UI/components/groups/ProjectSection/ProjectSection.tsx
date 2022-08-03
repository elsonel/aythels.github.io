import React from 'react';
import styled from 'styled-components';
import { ImageThumbnail } from '../../atoms/ImageThumbnail';
import { GridSquare } from '../../layout/GridSquare';
import { ProjectSectionImage } from '../../atoms/ProjectSectionImage';
import { ProjectSectionTitle } from '../../atoms/ProjectSectionTitle';
import { ProjectSectionText } from '../../atoms/ProjectSectionText';
import { ProjectSectionFact } from '../../atoms/ProjectSectionFact';

export interface ProjectSectionProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  children: React.ReactElement[];
}

export const ProjectSection: React.FC<ProjectSectionProps> = ({
  title,
  children,
  ...props
}): React.ReactElement => {
  return (
    <div>
      <Wrapper {...props}>
        <Contents>
          <ProjectSectionTitle>{title}</ProjectSectionTitle>
          <ProjectSectionText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non provident.
          </ProjectSectionText>
          <ProjectSectionText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non provident.
          </ProjectSectionText>
          <ProjectSectionFact label="TYPE">
            Mobile Application
          </ProjectSectionFact>
          <ProjectSectionFact label="COMPLETION">June 2022</ProjectSectionFact>
          <ProjectSectionFact label="COLLABORATORS">
            Elson Liang, Xavier Woo, Perry Wang
          </ProjectSectionFact>
          <ProjectSectionFact label="GITHUB">Link</ProjectSectionFact>
        </Contents>
      </Wrapper>
      <Wrapper {...props}>
        <Contents>
          <ProjectSectionTitle>GALLERY</ProjectSectionTitle>
          <StyledGridSquare columnCount={3}>
            <ImageThumbnail src="/example/square.jpg" />
            <ImageThumbnail src="/example/square.jpg" />
            <ImageThumbnail src="/example/square.jpg" />
            <ImageThumbnail src="/example/square.jpg" />
          </StyledGridSquare>
        </Contents>
      </Wrapper>
      <Wrapper {...props}>
        <Contents>
          <ProjectSectionTitle>PROCESS</ProjectSectionTitle>
          <ProjectSectionText title="Concept">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non provident.
          </ProjectSectionText>
          <ProjectSectionImage src="/example/landscape.jpg">
            This is an image
          </ProjectSectionImage>
          <ProjectSectionText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non provident.
          </ProjectSectionText>
        </Contents>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 20px;

  display: flex;
  justify-content: center;
`;

const Contents = styled.div`
  box-sizing: border-box;
  width: 700px;

  > * {
    width: 100%;
    margin-bottom: 30px;
  }
`;

// CONTENTS STYLING
const StyledGridSquare = styled(GridSquare)`
  padding: 0px;
`;

const BlankSpace = styled.div`
  width: 100%;
  height: 0px;
`;
