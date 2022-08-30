import { Meta, Story } from '@storybook/react';
import { ButtonModal, ButtonModalProps } from './ButtonModal';
import { ArrowRight } from '@styled-icons/zondicons/ArrowRight';
import { IIconSVG } from '../../atoms/IIconSVG';

export default {
  title: 'Inputs/ButtonModal',
  component: ButtonModal,
  args: {
    icon: <IIconSVG src={ArrowRight} />,
  },
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<ButtonModalProps> = (args) => <ButtonModal {...args} />;

export const Basic = Template.bind({});
