import { Meta, Story } from '@storybook/react';
import { FooterLink, FooterLinkProps } from './FooterLink';

export default {
  title: 'Groups/Footer/FooterLink',
  component: FooterLink,
  args: {},
} as Meta;

const Template: Story<FooterLinkProps> = (args) => <FooterLink {...args} />;

export const Basic = Template.bind({});
