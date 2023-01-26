import { Meta, Story } from '@storybook/react';
import { TextTransition, TextTransitionProps } from './TextTransition';

export default {
  title: 'Text/TextTransition',
  component: TextTransition,
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    isVisible: true,
    topOffset: 20,
  },
} as Meta;

const Template: Story<TextTransitionProps> = (args) => (
  <TextTransition {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  ...Basic.args,
};

export const Heading = Template.bind({});
Heading.args = {
  ...Heading.args,
  size: 'h1',
};
