import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Background, IBackgroundProps } from './Background';

export default {
  title: 'Groups/AboutPage/Background',
  component: Background,
  args: {},
} as Meta;

const Template: Story<IBackgroundProps> = (args) => <Background {...args} />;

export const Basic = Template.bind({});
