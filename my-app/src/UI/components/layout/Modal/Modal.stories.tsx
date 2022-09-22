import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import { Modal, ModalProps } from './Modal';

export default {
  title: 'Layout/Modal',
  component: Modal,
  args: {
    isVisible: true,
    children: 'Hello World',
  },
} as Meta;

const Template: Story<ModalProps> = (args) => (
  <div>
    <Modal {...args} />
  </div>
);

export const Basic = Template.bind({});
