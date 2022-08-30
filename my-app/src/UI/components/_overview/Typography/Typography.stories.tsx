import { Meta, Story } from '@storybook/react';
import { Typography, TypographyProps } from './Typography';

export default {
  title: 'Overview/Typography',
  component: Typography,
  args: {},
  argTypes: {},
} as Meta;

const Template: Story<TypographyProps> = (args) => <Typography {...args} />;

export const Basic = Template.bind({});
