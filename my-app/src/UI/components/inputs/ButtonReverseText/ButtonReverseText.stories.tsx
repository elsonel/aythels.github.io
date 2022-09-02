import { Meta, Story } from '@storybook/react';
import { Sword } from 'styled-icons/remix-fill';
import { ButtonReverseText, ButtonReverseTextProps } from './ButtonReverseText';

export default {
  title: 'Inputs/ButtonReverseText',
  component: ButtonReverseText,
  args: {
    children: 'ESCAPE',
    icon: Sword,
    border: '#F37676',
    borderHovered: '#F37676',
    color: '#F37676',
    colorHovered: 'white',
    colorText: 'white',
    colorTextHovered: '#F37676',
    isActive: false,
    isDisabled: false,
  },
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<ButtonReverseTextProps> = (args) => (
  <ButtonReverseText {...args} />
);

export const Basic = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  ...Disabled.args,
  isDisabled: true,
};

export const Colored = Template.bind({});
Colored.args = {
  ...Colored.args,
  border: 'black',
  borderHovered: 'grey',
  color: 'black',
  colorHovered: 'grey',
};

export const Opposite = Template.bind({});
Opposite.args = {
  ...Opposite.args,
  border: 'grey',
  borderHovered: 'grey',
  color: 'white',
  colorHovered: 'grey',
  colorText: 'grey',
  colorTextHovered: 'white',
};

export const Active = Template.bind({});
Active.args = {
  ...Active.args,
  border: 'grey',
  borderHovered: 'grey',
  color: 'white',
  colorHovered: 'white',
  colorText: 'grey',
  colorTextHovered: 'grey',
};
