import { Meta, Story } from '@storybook/react';
import { IconLinkExternal, IconLinkExternalProps } from './IconLinkExternal';
import { Linkedin } from '@styled-icons/fa-brands/Linkedin';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Inputs/IconLinkExternal',
  component: IconLinkExternal,
  args: {
    src: Linkedin,
    to: 'https://github.com/aythels',
    size: 32,
  },
} as Meta;

const Template: Story<IconLinkExternalProps> = (args) => (
  <IconLinkExternal {...args} />
);

export const Basic = Template.bind({});
