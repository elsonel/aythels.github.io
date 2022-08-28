import { Meta, Story } from '@storybook/react';
import { FooterCopyright, FooterCopyrightProps } from './FooterCopyright';

export default {
  title: 'Groups/Footer/FooterCopyright',
  component: FooterCopyright,
  args: {},
} as Meta;

const Template: Story<FooterCopyrightProps> = (args) => (
  <FooterCopyright {...args} />
);

export const Basic = Template.bind({});
