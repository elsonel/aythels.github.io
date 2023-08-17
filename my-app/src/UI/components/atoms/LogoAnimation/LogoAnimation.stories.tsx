import { Meta, Story } from '@storybook/react';
import { LogoAnimation, LogoAnimationProps } from './LogoAnimation';

export default {
  title: 'Atoms/LogoAnimation',
  component: LogoAnimation,
  args: {},
  argTypes: { onAnimationEnd: { action: 'ended' } },
} as Meta;

const Template: Story<LogoAnimationProps> = (args) => (
  <LogoAnimation {...args} />
);

export const Basic = Template.bind({});
