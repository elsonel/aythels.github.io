import { Meta, Story } from '@storybook/react';
import { Header, HeaderProps } from './Header';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import { HeaderLogo } from '../HeaderLogo';
import { HeaderTabs } from '../HeaderTabs';

export default {
  title: 'Groups/Header/Header',
  component: Header,
  args: {
    children: [
      <HeaderLogo link="/" onClick={() => {}} onNavigate={() => {}} />,
      <HeaderTabs
        tabs={[
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
        ]}
      />,
    ],
  },
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Basic = Template.bind({});

export const NoTabs = Template.bind({});
NoTabs.args = {
  ...NoTabs.args,
  children: [<HeaderLogo link="/" />, <HeaderTabs tabs={[]} />],
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
