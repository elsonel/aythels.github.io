import { Meta, Story } from '@storybook/react';
import { HeaderTab, IHeaderTabProps } from './HeaderTab';

export default {
  title: 'Groups/Header/HeaderTab',
  component: HeaderTab,
  argTypes: {
    onClick: { action: 'clicked' },
  },
  args: {
    children: 'PROJECTS',
    href: '/projects',
    isActive: false,
  },
  parameters: {
    layout: 'padded',
  },
} as Meta;

const Template: Story<IHeaderTabProps> = (args) => <HeaderTab {...args} />;

export const Basic = Template.bind({});
