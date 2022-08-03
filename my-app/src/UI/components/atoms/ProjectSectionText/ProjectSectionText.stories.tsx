import { Meta, Story } from '@storybook/react';
import {
  ProjectSectionText,
  ProjectSectionTextProps,
} from './ProjectSectionText';

export default {
  title: 'Atoms/ProjectSectionText',
  component: ProjectSectionText,
  args: {
    title: 'Concept Design',
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non provident.',
  },
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<ProjectSectionTextProps> = (args) => (
  <ProjectSectionText {...args} />
);

export const Basic = Template.bind({});

export const NoTitle = Template.bind({});
NoTitle.args = {
  ...NoTitle.args,
  title: undefined,
};

export const LongText = Template.bind({});
LongText.args = {
  ...LongText.args,
  title:
    'This is a Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Long Title FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF',
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non provident. FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF',
};
