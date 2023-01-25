import { Meta, Story } from '@storybook/react';
import { TextTitle, TextTitleProps } from './TextTitle';

export default {
  title: 'Text/TextTitle',
  component: TextTitle,
  args: {
    children: 'Title',
    size: 'default',
  },
} as Meta;

const Template: Story<TextTitleProps> = (args) => <TextTitle {...args} />;

export const Small = Template.bind({});
Small.args = {
  ...Small.args,
  children: 'THIS IS THE TITLE',
  size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  ...Medium.args,
  children: 'THIS IS THE TITLE',
  size: 'default',
};

export const Large = Template.bind({});
Large.args = {
  ...Large.args,
  children: 'THIS IS THE TITLE',
  size: 'large',
};
