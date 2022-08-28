import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from './Button';
import { Sword } from '@styled-icons/remix-fill/Sword';
import { IIconSVG } from '../../atoms/IIconSVG';

export default {
  title: 'Inputs/Button',
  component: Button,
  args: {
    children: 'ESCAPE',
    isDisabled: false,
    primary: '#F37676',
    secondary: 'white',
  },
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Basic = Template.bind({});

export const BasicColored = Template.bind({});
BasicColored.args = {
  ...BasicColored.args,
  primary: 'red',
  secondary: 'blue',
};

export const BasicDisabled = Template.bind({});
BasicDisabled.args = {
  ...BasicDisabled.args,
  isDisabled: true,
};

export const Icon = Template.bind({});
Icon.args = {
  ...Icon.args,
  icon: <IIconSVG src={Sword} />,
};

export const IconColored = Template.bind({});
IconColored.args = {
  ...IconColored.args,
  icon: <IIconSVG src={Sword} />,
  primary: 'red',
  secondary: 'blue',
};

export const IconDisabled = Template.bind({});
IconDisabled.args = {
  ...IconDisabled.args,
  icon: <IIconSVG src={Sword} />,
  isDisabled: true,
};

export const BasicSmall = Template.bind({});
BasicSmall.args = {
  ...BasicSmall.args,
  size: 'small',
};

export const IconSmall = Template.bind({});
IconSmall.args = {
  ...IconSmall.args,
  size: 'small',
  icon: <IIconSVG src={Sword} />,
};
