import { Meta, Story } from '@storybook/react';
import { ButtonText, ButtonTextProps } from './ButtonText';
import { Sword } from '@styled-icons/remix-fill/Sword';

export default {
  title: 'Inputs/ButtonText',
  component: ButtonText,
  args: {
    children: 'BUTTON',
    isDisabled: false,
    color: '#F37676',
    colorHovered: '#F37676',
    colorText: 'white',
    colorTextHovered: 'white',
    size: 'medium',
  },
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<ButtonTextProps> = (args) => <ButtonText {...args} />;

export const Medium = Template.bind({});

export const Colored = Template.bind({});
Colored.args = {
  ...Colored.args,
  color: 'red',
  colorText: 'blue',
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Disabled.args,
  isDisabled: true,
};

export const Icon = Template.bind({});
Icon.args = {
  ...Icon.args,
  iconSrc: Sword,
};

export const IconColored = Template.bind({});
IconColored.args = {
  ...IconColored.args,
  iconSrc: Sword,
  color: 'red',
  colorText: 'blue',
};

export const IconDisabled = Template.bind({});
IconDisabled.args = {
  ...IconDisabled.args,
  iconSrc: Sword,
  isDisabled: true,
};

export const Small = Template.bind({});
Small.args = {
  ...Small.args,
  size: 'small',
};

export const IconSmall = Template.bind({});
IconSmall.args = {
  ...IconSmall.args,
  size: 'small',
  iconSrc: Sword,
};
