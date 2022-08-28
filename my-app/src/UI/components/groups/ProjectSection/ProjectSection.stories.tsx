import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import { ImageThumbnail } from '../../atoms/ImageThumbnail';
import { ProjectSectionFact } from '../../atoms/ProjectSectionFact';
import { ProjectSectionImage } from '../../atoms/ProjectSectionImage';
import { ProjectSectionText } from '../../atoms/ProjectSectionText';
import { GridSquare } from '../../layout/GridSquare';
import { ProjectSection, ProjectSectionProps } from './ProjectSection';

export default {
  title: 'Groups/ProjectSection',
  component: ProjectSection,
  args: {
    title: 'OVERVIEW',
    children: [
      <ProjectSectionText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non provident.
      </ProjectSectionText>,
      <ProjectSectionText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non provident.
      </ProjectSectionText>,
      <ProjectSectionFact label="TYPE">Mobile Application</ProjectSectionFact>,
      <ProjectSectionFact label="COMPLETION">June 2022</ProjectSectionFact>,
      <ProjectSectionFact label="COLLABORATORS">
        Elson Liang, Xavier Woo, Perry Wang
      </ProjectSectionFact>,
      <ProjectSectionFact label="GITHUB">Link</ProjectSectionFact>,
    ],
  },
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<ProjectSectionProps> = (args) => (
  <ProjectSection {...args} />
);

export const ExampleOverview = Template.bind({});

const StyledGridSquare = styled(GridSquare)`
  padding: 0px;
`;

export const ExampleGallery = Template.bind({});
ExampleGallery.args = {
  ...ExampleGallery.args,
  title: 'GALLERY',
  children: [
    <StyledGridSquare>
      <ImageThumbnail src="/example/square.jpg" />
      <ImageThumbnail src="/example/square.jpg" />
      <ImageThumbnail src="/example/square.jpg" />
      <ImageThumbnail src="/example/square.jpg" />
    </StyledGridSquare>,
  ],
};

export const ExampleProcess = Template.bind({});
ExampleProcess.args = {
  ...ExampleProcess.args,
  title: 'PROCESS',
  children: [
    <ProjectSectionText title="Concept">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non provident.
    </ProjectSectionText>,
    <ProjectSectionImage src="/example/landscape.jpg">
      This is an image
    </ProjectSectionImage>,
    <ProjectSectionText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non provident.
    </ProjectSectionText>,
  ],
};
