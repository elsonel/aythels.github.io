import { Meta, Story } from '@storybook/react';
import React from 'react';
import { About, AboutProps } from './About';

export default {
  title: 'Groups/About',
  component: About,
  args: {},
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<AboutProps> = (args) => <About {...args} />;

export const Basic = Template.bind({});
