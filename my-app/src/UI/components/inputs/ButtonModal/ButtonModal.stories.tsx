import { Meta, Story } from '@storybook/react';
import { ButtonModal, ButtonModalProps } from './ButtonModal';
import { ArrowRight } from '@styled-icons/zondicons/ArrowRight';

export default {
  title: 'Inputs/ButtonModal',
  component: ButtonModal,
  args: {
    icon: <ArrowRight />,
  },
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<ButtonModalProps> = (args) => <ButtonModal {...args} />;

export const Basic = Template.bind({});
