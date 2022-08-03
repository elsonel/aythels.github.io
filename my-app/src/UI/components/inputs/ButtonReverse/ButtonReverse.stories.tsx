import { Meta, Story } from '@storybook/react';
import { ButtonReverse, ButtonReverseProps } from './ButtonReverse';

export default {
  title: 'Inputs/ButtonReverse',
  component: ButtonReverse,
  args: {
    children: 'ESCAPE',
    border: '#F37676',
    borderReversed: '#F37676',
    primary: '#F37676',
    secondary: 'white',
    primaryReversed: '#F37676',
    secondaryReversed: 'white',
    isActive: false,
    isDisabled: false,
  },
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<ButtonReverseProps> = (args) => (
  <ButtonReverse {...args} />
);

export const Basic = Template.bind({});

export const BasicDisabled = Template.bind({});
BasicDisabled.args = {
  ...BasicDisabled.args,
  isDisabled: true,
};

export const BasicColored = Template.bind({});
BasicColored.args = {
  ...BasicColored.args,
  border: 'black',
  borderReversed: 'grey',
  primary: 'black',
  secondary: 'white',
  primaryReversed: 'grey',
  secondaryReversed: 'white',
};

export const BasicActive = Template.bind({});
BasicActive.args = {
  ...BasicActive.args,
  isActive: true,
};

export const Opposite = Template.bind({});
Opposite.args = {
  ...Opposite.args,
  border: '#F37676',
  borderReversed: 'black',
  primary: 'white',
  secondary: '#F37676',
  primaryReversed: 'white',
  secondaryReversed: 'black',
};

export const OppositeActive = Template.bind({});
OppositeActive.args = {
  ...OppositeActive.args,
  isActive: true,
  border: '#F37676',
  borderReversed: 'black',
  primary: 'white',
  secondary: '#F37676',
  primaryReversed: 'white',
  secondaryReversed: 'black',
};
