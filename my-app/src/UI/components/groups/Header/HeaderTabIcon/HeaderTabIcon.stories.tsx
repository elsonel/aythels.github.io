import { Meta, Story } from '@storybook/react';
import { HeaderTabIcon, IHeaderTabIconProps } from './HeaderTabIcon';

export default {
  title: 'Groups/Header/HeaderTabIcon',
  component: HeaderTabIcon,
  argTypes: {
    onClick: { action: 'clicked' },
  },
  args: {
    href: '/',
  },
  parameters: {
    layout: 'padded',
  },
} as Meta;

const Template: Story<IHeaderTabIconProps> = (args) => (
  <HeaderTabIcon {...args} />
);

export const Basic = Template.bind({});
