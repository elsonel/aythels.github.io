import { Meta, Story } from '@storybook/react';
import { LinkIcon, LinkIconProps } from './LinkIcon';
import { Linkedin } from '@styled-icons/fa-brands/Linkedin';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Input/LinkIcon',
  component: LinkIcon,
  args: {
    children: <Linkedin size={24}/>,
    href: "https://github.com/aythels",
    target: "_blank",
    rel: "noreferrer",
  },
} as Meta;

const Template: Story<LinkIconProps> = (args) => <LinkIcon {...args} />;

export const Basic = Template.bind({});
