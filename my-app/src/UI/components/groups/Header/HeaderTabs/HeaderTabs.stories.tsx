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
        link: '/projects',
        onClick: () => {},
        onNavigate: () => {},
      },
      {
        label: 'GALLERY',
        link: '/gallery',
        onClick: () => {},
        onNavigate: () => {},
      },
      {
        label: 'ABOUT',
        link: '/about',
        onClick: () => {},
        onNavigate: () => {},
      },
      {
        label: 'BLOG',
        link: '/blog',
        onClick: () => {},
        onNavigate: () => {},
      },
    ],
  },
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<HeaderTabsProps> = (args) => <HeaderTabs {...args} />;

export const Basic = Template.bind({});
