import { Meta, Story } from '@storybook/react';
import { Link, LinkProps } from './Link';

export default {
  title: 'Inputs/Link',
  component: Link,
  args: {
    href: 'https://github.com/',
    children: 'Link',
    isOpeningNewTab: true,
  },
} as Meta;

const Template: Story<LinkProps> = (args) => <Link {...args} />;

export const NewTab = Template.bind({});

export const Redirect = Template.bind({});
Redirect.args = {
  ...Redirect.args,
  href: '/',
  children: 'Redirect',
  isOpeningNewTab: false,
};
