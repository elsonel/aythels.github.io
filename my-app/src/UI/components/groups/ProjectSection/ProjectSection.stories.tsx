import { Meta, Story } from '@storybook/react';
import { ProjectSection, ProjectSectionProps } from './ProjectSection';

export default {
  title: 'Groups/ProjectSection',
  component: ProjectSection,
  args: {
    title: 'OVERVIEW',
    children: [],
  },
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<ProjectSectionProps> = (args) => (
  <ProjectSection {...args} />
);

export const Basic = Template.bind({});
