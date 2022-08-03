import { Meta, Story } from '@storybook/react';
import { HeaderBrowser, HeaderBrowserProps } from './HeaderBrowser';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

export default {
  title: 'Groups/Header/HeaderBrowser',
  component: HeaderBrowser,
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

const Template: Story<HeaderBrowserProps> = (args) => (
  <HeaderBrowser {...args} />
);

export const Basic = Template.bind({});

export const NoTabs = Template.bind({});
NoTabs.args = {
  ...NoTabs.args,
  tabs: [],
};

export const Tablet = Template.bind({});
Tablet.parameters = {
  ...Tablet.parameters,
  viewport: {
    ...MINIMAL_VIEWPORTS,
    defaultViewport: 'tablet',
  },
};

export const Mobile = Template.bind({});
Mobile.parameters = {
  ...Mobile.parameters,
  viewport: {
    ...MINIMAL_VIEWPORTS,
    defaultViewport: 'mobile2',
  },
};
