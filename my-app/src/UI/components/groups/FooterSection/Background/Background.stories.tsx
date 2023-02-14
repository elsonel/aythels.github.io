import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Background, BackgroundProps } from './Background';

export default {
  title: 'Groups/FooterSection/Background',
  component: Background,
  args: {
    isLoaded: true,
  },
} as Meta;

const Template: Story<BackgroundProps> = (args) => <Background {...args} />;

export const Basic = Template.bind({});
