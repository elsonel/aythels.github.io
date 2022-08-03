import { Meta, Story } from '@storybook/react';
import { FooterDesktop } from './FooterDesktop';

export default {
  title: 'Groups/Footer/FooterDesktop',
  component: FooterDesktop,
  args: {},
} as Meta;

const Template: Story = (args) => <FooterDesktop {...args} />;

export const Basic = Template.bind({});
