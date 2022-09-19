import { Meta, Story } from '@storybook/react';
import { IconLinkExternal, IconLinkExternalProps } from './IconLinkExternal';
import { Linkedin } from '@styled-icons/fa-brands/Linkedin';
import { Theme } from '../../../utility/themes/Theme';

export default {
  title: 'Inputs/IconLinkExternal',
  component: IconLinkExternal,
  args: {
    src: Linkedin,
    to: 'https://github.com/aythels',
    size: 32,
    color: Theme.color.textNeutral,
    colorHovered: Theme.color.textHovered,
  },
} as Meta;

const Template: Story<IconLinkExternalProps> = (args) => (
  <IconLinkExternal {...args} />
);

export const Basic = Template.bind({});
