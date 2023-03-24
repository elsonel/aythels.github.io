import { Meta, Story } from '@storybook/react';
import { Awards, IAwardsProps } from './Awards';

export default {
  title: 'Groups/AboutPage/Awards',
  component: Awards,
  args: {},
} as Meta;

const Template: Story<IAwardsProps> = (args) => <Awards {...args} />;

export const Basic = Template.bind({});
