import React from 'react';
import { Meta, Story } from '@storybook/react';
import { HeaderTabsModal, HeaderTabsModalProps } from './HeaderTabsModal';

export default {
  title: 'Groups/Header/HeaderTabsModal',
  component: HeaderTabsModal,
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
      {
        label: 'LONGGGGGGGGGGGGGGGGGGGG TEXT',
        link: '/blog',
        onClick: () => {},
        onNavigate: () => {},
      },
    ],
    isVisible: true,
  },
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<HeaderTabsModalProps> = (args) => (
  <HeaderTabsModal {...args} />
);

export const Basic = Template.bind({});
