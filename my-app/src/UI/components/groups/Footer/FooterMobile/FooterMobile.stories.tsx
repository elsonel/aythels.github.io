import { Meta, Story } from '@storybook/react';
import { FooterMobile } from './FooterMobile';

export default {
  title: 'Groups/Footer/FooterMobile',
  component: FooterMobile,
  args: {},
} as Meta;

const Template: Story = (args) => <FooterMobile {...args} />;

export const Basic = Template.bind({});
