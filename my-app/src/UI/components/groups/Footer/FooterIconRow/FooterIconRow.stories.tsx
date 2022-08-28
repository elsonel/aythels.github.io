import { Meta, Story } from '@storybook/react';
import { FooterIconRow, FooterIconRowProps } from './FooterIconRow';

export default {
  title: 'Groups/Footer/FooterIconRow',
  component: FooterIconRow,
  args: {},
} as Meta;

const Template: Story<FooterIconRowProps> = (args) => (
  <FooterIconRow {...args} />
);

export const Basic = Template.bind({});
