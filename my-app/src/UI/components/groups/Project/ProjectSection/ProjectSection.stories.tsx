import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import { ImageThumbnail } from '../../../atoms/ImageThumbnail';
import { Fact } from '../../../atoms/Fact';
import { ProjectSectionImage } from '../../../atoms/ProjectSectionImage';
import { ProjectSectionText } from '../../../atoms/ProjectSectionText';
import { Grid } from '../../../layout/Grid';
import { ProjectSection, ProjectSectionProps } from './ProjectSection';
import { ProjectSectionFactList } from '../../../atoms/ProjectSectionFactList';
import { Theme } from '../../../../utility/themes/Theme';

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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do' eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non.
      </ProjectSectionText>,
      <ProjectSectionFactList>
        <Fact label="TYPE" value=" Mobile Application" />
        <Fact label="COMPLETION" value="June 2022" />
        <Fact
          label="COLLABORATORS"
          value="Elson Liang, Xavier Woo, Perry Wang"
        />
        <Fact label="GITHUB" value="Link" />
      </ProjectSectionFactList>,
    ],
  },
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<ProjectSectionProps> = (args) => (
  <ProjectSection {...args} />
);

export const ExampleOverview = Template.bind({});

const StyledGridSquare = styled(Grid)`
  padding: 0px;
`;

export const ExampleGallery = Template.bind({});
ExampleGallery.args = {
  ...ExampleGallery.args,
  title: 'GALLERY',
  children: [
    <StyledGridSquare>
      <ImageThumbnail src={Theme.image.exampleSquare} />
      <ImageThumbnail src={Theme.image.exampleSquare} />
      <ImageThumbnail src={Theme.image.exampleSquare} />
      <ImageThumbnail src={Theme.image.exampleSquare} />
    </StyledGridSquare>,
  ],
};

export const ExampleProcess = Template.bind({});
ExampleProcess.args = {
  ...ExampleProcess.args,
  title: 'PROCESS',
  children: [
    <ProjectSectionText title="Concept">
      {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur. Excepteur sint occaecat cupidatat non provident.`}
      {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do' eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur. Excepteur sint occaecat cupidatat non.`}
    </ProjectSectionText>,
    <ProjectSectionText title="Development">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </ProjectSectionText>,
    <ProjectSectionImage src={Theme.image.exampleLandscape}>
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
