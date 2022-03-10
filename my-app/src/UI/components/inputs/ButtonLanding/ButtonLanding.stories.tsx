import { Meta, Story } from '@storybook/react';
import { ButtonLanding, ButtonLandingProps } from './ButtonLanding';

export default {
    title: 'Input/ButtonLanding',
    component: ButtonLanding,
    args: {
      isReversed: false, 
      children: 'BUTTON',
      size: 'medium',
    },
    argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<ButtonLandingProps> = (args) => <ButtonLanding {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  ...Normal.args,
  isReversed: false, 
  children: 'NORMAL',
}

export const Reversed = Template.bind({});
Reversed.args = {
  ...Reversed.args,
  isReversed: true, 
  children: 'REVERSED',
}

export const Medium = Template.bind({});
Medium.args = {
  ...Medium.args,
  isReversed: false, 
  children: 'MEDIUM',
  size: 'medium',
}

export const Small = Template.bind({});
Small.args = {
  ...Small.args,
  isReversed: false, 
  children: 'SMALL',
  size: 'small',
}