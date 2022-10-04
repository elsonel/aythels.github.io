import { Meta, Story } from '@storybook/react';
import { LinkFake, LinkFakeProps } from './LinkFake';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Inputs/LinkFake',
  component: LinkFake,
  args: {
    href: 'https://github.com/aythels',
    children: 'Click Me',
  },
} as Meta;

const Template: Story<LinkFakeProps> = (args) => <LinkFake {...args} />;

export const Basic = Template.bind({});
