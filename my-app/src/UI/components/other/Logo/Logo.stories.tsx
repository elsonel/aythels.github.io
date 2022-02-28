import { Meta, Story } from '@storybook/react';
import { Logo, LogoProps } from './Logo';

export default {
    title: 'Other/Logo',
    component: Logo,
    args: {
      size: 32
    },
} as Meta;

const Template: Story<LogoProps> = (args) => <Logo {...args} />;

export const Large = Template.bind({});
Large.args = {
  ...Large.args,
  size: 32,
};

export const Small= Template.bind({});
Small.args = {
  ...Small.args,
  size: 24,
};