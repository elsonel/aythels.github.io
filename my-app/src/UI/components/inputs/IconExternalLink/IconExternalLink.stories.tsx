import { Meta, Story } from '@storybook/react';
import { IconExternalLink, IconExternalLinkProps } from './IconExternalLink';
import { Linkedin } from '@styled-icons/fa-brands/Linkedin';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Inputs/IconLinkExternal',
  component: IconExternalLink,
  args: {
    src: Linkedin,
    to: 'https://github.com/aythels',
    size: 32,
  },
} as Meta;

const Template: Story<IconExternalLinkProps> = (args) => (
  <IconExternalLink {...args} />
);

export const Basic = Template.bind({});
