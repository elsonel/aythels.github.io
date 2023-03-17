import { Meta, Story } from '@storybook/react';
import React from 'react';
import { AboutContent, AboutContentProps } from './AboutContent';

export default {
  title: 'Groups/AboutContent',
  component: AboutContent,
  args: {},
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<AboutContentProps> = (args) => <AboutContent {...args} />;

export const Basic = Template.bind({});
