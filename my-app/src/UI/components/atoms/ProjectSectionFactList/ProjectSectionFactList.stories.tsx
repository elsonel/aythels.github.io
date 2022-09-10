import { Meta, Story } from '@storybook/react';
import { Fact } from '../Fact';
import {
  ProjectSectionFactList,
  ProjectSectionFactListProps,
} from './ProjectSectionFactList';

export default {
  title: 'Atoms/ProjectSectionFactList',
  component: ProjectSectionFactList,
  args: {
    children: [
      <Fact key={1} label="TYPE" value=" Mobile Application" />,
      <Fact key={2} label="COMPLETION" value="June 2022" />,
      <Fact
        key={3}
        label="COLLABORATORS"
        value="Elson Liang, Xavier Woo, Perry Wang"
      />,
      <Fact key={4} label="GITHUB" value="Link" />,
    ],
  },
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<ProjectSectionFactListProps> = (args) => (
  <ProjectSectionFactList {...args} />
);

export const Basic = Template.bind({});
