import { Meta, Story } from '@storybook/react';
import React from 'react';
import { AboutPanel, AboutPanelProps } from './AboutPanel';

export default {
  title: 'Groups/AboutPanel',
  component: AboutPanel,
  args: {},
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<AboutPanelProps> = (args) => <AboutPanel {...args} />;

export const Basic = Template.bind({});
