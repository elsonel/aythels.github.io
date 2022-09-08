import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import { Modal, ModalProps } from './Modal';

const Content = styled.div`
  height: 200vh;
  width: 100vw;
`;

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
    <Content />
    <Modal {...args} />
  </div>
);

export const Basic = Template.bind({});
