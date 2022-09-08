import React from 'react';
import { Meta, Story } from '@storybook/react';
import { HeaderLogo, HeaderLogoProps } from './HeaderLogo';

export default {
  title: 'Groups/Header/HeaderLogo',
  component: HeaderLogo,
  args: {
    link: '/projects',
    onClick: () => {},
    onNavigate: () => {},
  },
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<HeaderLogoProps> = (args) => <HeaderLogo {...args} />;

export const Basic = Template.bind({});
