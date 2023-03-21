import { Meta, Story } from '@storybook/react';
import { Tabs, ITabsProps } from './Tabs';

export default {
  title: 'Groups/Atoms/Tabs',
  component: Tabs,
  argTypes: {
    onClick: { action: 'clicked' },
  },
  args: {
    tabs: [
      {
        label: 'Projects',
        href: '/projects',
        isActive: false,
      },
      {
        label: 'About',
        href: '/about',
        isActive: true,
      },
      {
        label: 'This is a Long Tab',
        href: '/long',
        isActive: false,
      },
    ],
  },
} as Meta;

const Template: Story<ITabsProps> = (args) => <Tabs {...args} />;

export const Basic = Template.bind({});
