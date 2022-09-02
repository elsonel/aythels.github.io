import { Meta, Story } from '@storybook/react';
import { ButtonModalNext, ButtonModalNextProps } from './ButtonModalNext';
import { ArrowRight } from '@styled-icons/zondicons/ArrowRight';
import { IIconSVG } from '../../atoms/IIconSVG';

export default {
  title: 'Inputs/ButtonModalNext',
  component: ButtonModalNext,
  args: {
    direction: 'RIGHT',
  },
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<ButtonModalNextProps> = (args) => (
  <ButtonModalNext {...args} />
);

export const Right = Template.bind({});

export const Left = Template.bind({});
Left.args = {
  ...Left.args,
  direction: 'LEFT',
};
