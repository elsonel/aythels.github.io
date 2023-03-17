import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Logo, ILogoProps } from './Logo';

export default {
  title: 'Groups/AboutContent/Logo',
  component: Logo,
  args: {},
} as Meta;

const Template: Story<ILogoProps> = (args) => <Logo {...args} />;

export const Basic = Template.bind({});
