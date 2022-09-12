import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import { ImageThumbnail } from '../ImageThumbnail';
import { ProjectLanding } from '../ProjectLanding';
import { Fact } from '../Fact';
import { ProjectSectionImage } from '../ProjectSectionImage';
import { ProjectSectionText } from '../ProjectSectionText';
import { Grid } from '../../layout/Grid';
import { ProjectSection } from '../../groups/ProjectSection';
import { ProjectLayout, ProjectLayoutProps } from './ProjectLayout';

const Gap = styled.div`
  width: 100%;
  height: 1000px;
  background: blue;
`;

export default {
  title: 'Atoms/ProjectLayout',
  component: ProjectLayout,
  args: {
    isLandingVisible: false,
    onLandingClose: () => console.log('Landing Closed'),
    onLandingClick: () => console.log('Landing Clicked'),
    children: [
      <ProjectLanding
        key={-1}
        title={'SPOTLIGHT'}
        subtitle={'UI / UX'}
        src="/example/square.jpg"
      />,
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
        <Fact label="TYPE" value=" Mobile Application" />
        <Fact label="COMPLETION" value="June 2022" />
        <Fact
          label="COLLABORATORS"
          value="Elson Liang, Xavier Woo, Perry Wang"
        />
        <Fact label="GITHUB" value="Link" />
      </ProjectSection>,
      <ProjectSection title="GALLERY" key={1}>
        <Grid
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
        </Grid>
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

const Template: Story<ProjectLayoutProps> = (args) => (
  <div>
    <ProjectLayout {...args} />
    <Gap />
  </div>
);

export const Basic = Template.bind({});
