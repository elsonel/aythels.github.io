import { Meta, Story } from '@storybook/react';
import { Header, IHeaderProps } from './Header';
import { HeaderTab } from './HeaderTab/HeaderTab';
import { HeaderTabIcon } from './HeaderTabIcon/HeaderTabIcon';

export default {
  title: 'Groups/Header',
  component: Header,
  argTypes: {
    onClick: { action: 'clicked' },
  },
  args: {
    tabIcon: <HeaderTabIcon />,
    children: [
      <HeaderTab key={1} isActive>
        PROJECTS
      </HeaderTab>,
      <HeaderTab key={2}>ABOUT</HeaderTab>,
    ],
    isLoaded: true,
    delay: 500,
    isAnimating: true,
  },
} as Meta;

const Template: Story<IHeaderProps> = (args) => <Header {...args} />;

export const Basic = Template.bind({});
