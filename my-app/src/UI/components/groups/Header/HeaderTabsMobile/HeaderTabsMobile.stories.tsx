import React from 'react';
import { Meta, Story } from '@storybook/react';
import { HeaderTabsMobile, HeaderTabsMobileProps } from './HeaderTabsMobile';

export default {
  title: 'Groups/Header/HeaderTabsMobile',
  component: HeaderTabsMobile,
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
      {
        label: 'LONGGGGGGGGGGGGGGGGGGGG TEXT',
        href: '/blog',
      },
    ],
    isVisible: true,
  },
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<HeaderTabsMobileProps> = (args) => (
  <HeaderTabsMobile {...args} />
);

export const Basic = Template.bind({});
