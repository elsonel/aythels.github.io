import { Meta, Story } from '@storybook/react';
import { EXAMPLE_DATA } from '../helpers';
import { ProjectList, IProjectListProps } from './ProjectList';

export default {
  title: 'Groups/ProjectsPage/ProjectList',
  component: ProjectList,
  args: {
    projectData: EXAMPLE_DATA,
  },
} as Meta;

const Template: Story<IProjectListProps> = (args) => <ProjectList {...args} />;

export const Basic = Template.bind({});
