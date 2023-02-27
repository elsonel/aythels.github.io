import { Meta, Story } from '@storybook/react';
import { LinkWithUnderline, LinkWithUnderlineProps } from './LinkWithUnderline';

export default {
  title: 'Inputs/LinkWithUnderline',
  component: LinkWithUnderline,
  args: {
    href: 'https://github.com/',
    children: 'PROTOTYPE',
  },
} as Meta;

const Template: Story<LinkWithUnderlineProps> = (args) => (
  <LinkWithUnderline {...args} />
);

export const Basic = Template.bind({});
