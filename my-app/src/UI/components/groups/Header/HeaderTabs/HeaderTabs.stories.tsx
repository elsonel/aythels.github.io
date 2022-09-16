import React from 'react';
import { Meta, Story } from '@storybook/react';
import { HeaderTabs, HeaderTabsProps } from './HeaderTabs';

export default {
  title: 'Groups/Header/HeaderTabs',
  component: HeaderTabs,
  args: {
    tabs: [
      {
        label: 'PROJECTS',
        href: '/projects',
      },
      {
        label: 'GALLERY',
        href: '/gallery',
      },
      {
        label: 'ABOUT',
        href: '/about',
      },
      {
        label: 'BLOG',
        href: '/blog',
      },
    ],
  },
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<HeaderTabsProps> = (args) => <HeaderTabs {...args} />;

export const Basic = Template.bind({});
