import { Meta, Story } from '@storybook/react';
import { Modal, ModalProps } from './Modal';

export default {
  title: 'Layout/Modal',
  component: Modal,
  argTypes: { onCloseComplete: { action: 'Completed close' } },
  args: {
    children: 'Hello World',
    isVisible: true,
  },
} as Meta;

const Template: Story<ModalProps> = (args) => (
  <div>
    <Modal {...args} />
  </div>
);

export const Basic = Template.bind({});
