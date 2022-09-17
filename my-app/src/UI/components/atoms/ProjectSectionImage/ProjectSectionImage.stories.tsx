import { Meta, Story } from '@storybook/react';
import { Theme } from '../../../utility/themes/Theme';
import {
  ProjectSectionImage,
  ProjectSectionImageProps,
} from './ProjectSectionImage';

export default {
  title: 'Atoms/ProjectSectionImage',
  component: ProjectSectionImage,
  args: {
    src: Theme.image.exampleLandscape,
    children: 'This is a caption',
  },
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<ProjectSectionImageProps> = (args) => (
  <ProjectSectionImage {...args} />
);

export const Basic = Template.bind({});

export const LongText = Template.bind({});
LongText.args = {
  ...LongText.args,
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non provident. FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF',
};
