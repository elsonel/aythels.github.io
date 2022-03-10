import { Meta, Story } from '@storybook/react';
import { Title, TitleProps } from './Title';

export default {
    title: 'Text/Title',
    component: Title,
    args: {
      children: 'Title',
      size: 'medium',
    },
} as Meta;

const Template: Story<TitleProps> = (args) => <Title {...args} />;

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
  size: 'medium',
};

export const Large = Template.bind({});
Large.args = {
  ...Large.args,
  children: 'THIS IS THE TITLE',
  size: 'large',
};