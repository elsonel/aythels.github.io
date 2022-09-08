import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import { HeaderTab, HeaderTabProps } from './HeaderTab';

export default {
  title: 'Inputs/HeaderTab',
  component: HeaderTab,
  args: {
    children: 'PROJECTS',
  },
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<HeaderTabProps> = (args) => <HeaderTab {...args} />;

export const Basic = Template.bind({});
