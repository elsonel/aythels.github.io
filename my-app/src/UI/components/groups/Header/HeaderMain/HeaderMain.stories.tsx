import { Meta, Story } from '@storybook/react';
import { HeaderMain, HeaderMainProps } from './HeaderMain';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

export default {
  title: 'Groups/Header/HeaderMain',
  component: HeaderMain,
  args: {
    tabs: [
      {
        label: 'PROJECTS',
        link: '/projects',
        onClick: () => {},
      },
      {
        label: 'GALLERY',
        link: '/gallery',
        onClick: () => {},
      },
      {
        label: 'ABOUT',
        link: '/about',
        onClick: () => {},
      },
      {
        label: 'BLOG',
        link: '/blog',
        onClick: () => {},
      },
    ],
    tabLogo: {
      label: 'HOME',
      link: '/',
      onClick: () => {},
    },
  },
} as Meta;

const Template: Story<HeaderMainProps> = (args) => <HeaderMain {...args} />;

export const Desktop = Template.bind({});

export const Mobile = Template.bind({});
Mobile.parameters = {
  ...Mobile.parameters,
  viewport: {
    ...MINIMAL_VIEWPORTS,
    defaultViewport: 'mobile1',
  },
};

export const Tablet = Template.bind({});
Tablet.parameters = {
  ...Tablet.parameters,
  viewport: {
    ...MINIMAL_VIEWPORTS,
    defaultViewport: 'tablet',
  },
};

export const NoTabs = Template.bind({});
NoTabs.args = {
  ...NoTabs.args,
  tabs: [],
};

export const NoLinks = Template.bind({});
NoLinks.args = {
  ...NoLinks.args,
  tabs: [
    {
      label: 'PROJECTS',
      onClick: () => {},
    },
    {
      label: 'GALLERY',
      onClick: () => {},
    },
    {
      label: 'ABOUT',
      onClick: () => {},
    },
    {
      label: 'BLOG',
      onClick: () => {},
    },
  ],
  tabLogo: {
    label: 'HOME',
    onClick: () => {},
  },
};
