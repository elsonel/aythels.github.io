import { Meta, Story } from '@storybook/react';
import { ButtonModalClose, ButtonModalCloseProps } from './ButtonModalClose';
import React from 'react';

export default {
  title: 'Inputs/ButtonModalClose',
  component: ButtonModalClose,
  args: {},
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<ButtonModalCloseProps> = (args) => (
  <ButtonModalClose {...args} />
);

export const Basic = Template.bind({});
