import { Meta, Story } from '@storybook/react';
import { ButtonModal, ButtonModalProps } from './ButtonModal';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Input/ButtonModal',
  component: ButtonModal,
  args: {
    children: 'Button Text',
  },
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<ButtonModalProps> = (args) => <ButtonModal {...args} />;

export const Basic = Template.bind({});