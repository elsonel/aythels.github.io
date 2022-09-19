import { Meta, Story } from '@storybook/react';
import { AboutSocialRow, AboutSocialRowProps } from './AboutSocialRow';

export default {
  title: 'Atoms/AboutSocialRow',
  component: AboutSocialRow,
  args: {},
} as Meta;

const Template: Story<AboutSocialRowProps> = (args) => (
  <AboutSocialRow {...args} />
);

export const Basic = Template.bind({});
