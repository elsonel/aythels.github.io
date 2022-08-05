import { Meta, Story } from '@storybook/react';
import {
  ProjectSectionTitle,
  ProjectSectionTitleProps,
} from './ProjectSectionTitle';

export default {
  title: 'Atoms/ProjectSectionTitle',
  component: ProjectSectionTitle,
  args: {
    children: 'PROJECT OVERVIEW',
  },
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<ProjectSectionTitleProps> = (args) => (
  <ProjectSectionTitle {...args} />
);

export const Basic = Template.bind({});

export const LongTitle = Template.bind({});
LongTitle.args = {
  ...LongTitle.args,
  children:
    'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF',
};

export const NoTitle = Template.bind({});
NoTitle.args = {
  ...NoTitle.args,
  children: undefined,
};
