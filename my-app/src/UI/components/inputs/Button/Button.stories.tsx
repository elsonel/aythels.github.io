import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Button, ButtonProps } from './Button';
import { Sword } from '@styled-icons/remix-fill/Sword';
import { IIconSVG } from '../../atoms/IIconSVG';

export default {
  title: 'Inputs/Button',
  component: Button,
  args: {
    children: 'BUTTON',
    isDisabled: false,
    border: undefined,
    borderHovered: undefined,
    color: '#F37676',
    colorHovered: undefined,
  },
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Basic = Template.bind({});

export const Colored = Template.bind({});
Colored.args = {
  ...Colored.args,
  color: 'red',
  border: 'black',
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Disabled.args,
  isDisabled: true,
};

export const Icon = Template.bind({});
Icon.args = {
  ...Icon.args,
  children: <IIconSVG src={Sword} />,
};
