import { Meta, Story } from '@storybook/react';
import { TextButton, TextButtonProps } from './TextButton';

export default {
  title: 'Text/TextButton',
  component: TextButton,
  args: {
    children: 'BUTTON',
  },
} as Meta;

const Template: Story<TextButtonProps> = (args) => <TextButton {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  ...Basic.args,
};
