import { Meta, Story } from '@storybook/react';
import { LinkInternal, LinkInternalProps } from './LinkInternal';

export default {
  title: 'Other/LinkInternal',
  component: LinkInternal,
  args: {
    children: 'Click me',
    link: '/home',
  },
} as Meta;

const Template: Story<LinkInternalProps> = (args) => <LinkInternal {...args} />;

export const Basic = Template.bind({});
