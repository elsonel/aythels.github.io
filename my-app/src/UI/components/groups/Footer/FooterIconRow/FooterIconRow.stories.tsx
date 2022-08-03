import { Meta, Story } from '@storybook/react';
import { FooterIconRow, FooterIconRowProps } from './FooterIconRow';

export default {
  title: 'Groups/Footer/FooterIconRow',
  component: FooterIconRow,
  args: {
    size: '24',
  },
} as Meta;

const Template: Story<FooterIconRowProps> = (args) => (
  <FooterIconRow {...args} />
);

export const Small = Template.bind({});
Small.args = {
  ...Small.args,
  size: 24,
};

export const Large = Template.bind({});
Large.args = {
  ...Large.args,
  size: 32,
};
