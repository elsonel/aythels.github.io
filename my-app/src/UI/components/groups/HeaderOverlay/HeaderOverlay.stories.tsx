import { Meta, Story } from '@storybook/react';
import { HeaderOverlay, IHeaderOverlayProps } from './HeaderOverlay';

export default {
  title: 'Groups/MainPage/HeaderOverlay',
  component: HeaderOverlay,
  argTypes: {
    onClick: { action: 'clicked' },
  },
  args: {
    iconTab: {
      href: '/',
    },
    tabs: [
      {
        label: 'PROJECTS',
        href: '/projects',
        isActive: false,
      },
      {
        label: 'ABOUT',
        href: '/about',
        isActive: true,
      },
    ],
  },
} as Meta;

const Template: Story<IHeaderOverlayProps> = (args) => (
  <HeaderOverlay {...args} />
);

export const Basic = Template.bind({});

export const WithLongTab = Template.bind({});
WithLongTab.args = {
  ...WithLongTab.args,
  tabs: [
    {
      label: 'VERYVERYVERYLONGTAB',
      href: '/projects',
      isActive: false,
    },
    {
      label: 'ABOUT',
      href: '/about',
      isActive: true,
    },
  ],
};
