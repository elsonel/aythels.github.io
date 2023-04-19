import { Meta, Story } from '@storybook/react';
import { LinkIcon, LinkIconProps } from './LinkIcon';
import { Linkedin } from '@styled-icons/fa-brands/Linkedin';
import { Theme } from '../../../utilities/themes/Theme';

export default {
  title: 'Inputs/LinkIcon',
  component: LinkIcon,
  args: {
    src: Linkedin,
    href: 'https://github.com/',
    size: 32,
    color: Theme.color.textNeutral,
    colorHovered: Theme.color.textHovered,
  },
} as Meta;

const Template: Story<LinkIconProps> = (args) => <LinkIcon {...args} />;

export const Basic = Template.bind({});
