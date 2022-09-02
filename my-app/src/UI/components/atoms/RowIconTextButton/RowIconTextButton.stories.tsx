import { Meta, Story } from '@storybook/react';
import { Github } from 'styled-icons/boxicons-logos';
import { RowIconTextButton, RowIconTextButtonProps } from './RowIconTextButton';

export default {
  title: 'Atoms/RowIconTextButton',
  component: RowIconTextButton,
  args: {
    text: 'BUTTON',
    iconSrc: Github,
    color: 'black',
    size: 'medium',
  },
} as Meta;

const Template: Story<RowIconTextButtonProps> = (args) => (
  <RowIconTextButton {...args} />
);

export const Medium = Template.bind({});

export const TextOnly = Template.bind({});
TextOnly.args = {
  ...TextOnly.args,
  iconSrc: undefined,
};

export const IconOnly = Template.bind({});
IconOnly.args = {
  ...IconOnly.args,
  text: undefined,
};

export const Colored = Template.bind({});
Colored.args = {
  ...Colored.args,
  color: 'red',
};

export const Small = Template.bind({});
Small.args = {
  ...Small.args,
  size: 'small',
};
