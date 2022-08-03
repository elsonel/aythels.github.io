import { Meta, Story } from '@storybook/react';
import { LinkExternalIcon, LinkExternalIconProps } from './LinkExternalIcon';
import { Linkedin } from '@styled-icons/fa-brands/Linkedin';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Inputs/LinkExternalIcon',
  component: LinkExternalIcon,
  args: {
    children: <Linkedin size={24} />,
    href: 'https://github.com/aythels',
    target: '_blank',
    rel: 'noreferrer',
  },
} as Meta;

const Template: Story<LinkExternalIconProps> = (args) => (
  <LinkExternalIcon {...args} />
);

export const Basic = Template.bind({});
