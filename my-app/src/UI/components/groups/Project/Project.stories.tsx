import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import { ImageThumbnail } from '../../atoms/ImageThumbnail';
import { ProjectLanding } from '../../atoms/ProjectLanding';
import { ProjectSectionFact } from '../../atoms/ProjectSectionFact';
import { ProjectSectionImage } from '../../atoms/ProjectSectionImage';
import { ProjectSectionText } from '../../atoms/ProjectSectionText';
import { Grid } from '../../layout/Grid';
import { ProjectSection } from '../ProjectSection';
import { Project, ProjectProps } from './Project';

const Gap = styled.div`
  width: 100%;
  height: 100px;
  background: blue;
`;

const StyledGridSquare = styled(Grid)`
  padding: 0px;
`;

export default {
  title: 'Groups/Project',
  component: Project,
  args: {
    landingComponent: (
      <ProjectLanding
        subtitle={'UI / UX'}
        title={'SPOTLIGHT'}
        src="/example/square.jpg"
      />
    ),
    children: [
      <ProjectSection title="OVERVIEW" key={0}>
        <ProjectSectionText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non provident.
        </ProjectSectionText>
        <ProjectSectionText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non provident.
        </ProjectSectionText>
        <ProjectSectionFact label="TYPE">Mobile Application</ProjectSectionFact>
        <ProjectSectionFact label="COMPLETION">June 2022</ProjectSectionFact>
        <ProjectSectionFact label="COLLABORATORS">
          Elson Liang, Xavier Woo, Perry Wang
        </ProjectSectionFact>
        <ProjectSectionFact label="GITHUB">Link</ProjectSectionFact>
      </ProjectSection>,
      <ProjectSection title="GALLERY" key={1}>
        <StyledGridSquare
          breakpoints={[
            {
              minWidth: 0,
              columnCount: 1,
            },
            {
              minWidth: 600,
              columnCount: 2,
            },
            {
              minWidth: 1100,
              columnCount: 3,
            },
          ]}
        >
          <ImageThumbnail src="/example/square.jpg" />
          <ImageThumbnail src="/example/square.jpg" />
          <ImageThumbnail src="/example/square.jpg" />
          <ImageThumbnail src="/example/square.jpg" />
        </StyledGridSquare>
      </ProjectSection>,
      <ProjectSection title="PROCESS" key={2}>
        <ProjectSectionText title="Concept">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non provident.
        </ProjectSectionText>
        <ProjectSectionImage src="/example/landscape.jpg">
          This is an image
        </ProjectSectionImage>
        <ProjectSectionText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non provident.
        </ProjectSectionText>
      </ProjectSection>,
    ],
  },
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<ProjectProps> = (args) => (
  <div>
    <Project {...args} />
    <Gap />
    <Gap />
    <Gap />
    <Gap />
    <Gap />
    <Gap />
    <Gap />
    <Gap />
  </div>
);

export const Basic = Template.bind({});

export const ExampleSections = Template.bind({});
ExampleSections.args = {
  ...ExampleSections.args,
  children: [
    <ProjectSection title="GALLERY 1" key={1} />,
    <ProjectSection title="GALLERY 2" key={2} />,
    <ProjectSection title="GALLERY 3" key={3} />,
  ],
};
