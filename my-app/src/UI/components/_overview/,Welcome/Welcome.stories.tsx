import { Meta, Story } from '@storybook/react';
import { Welcome, WelcomeProps } from './Welcome';

export default {
  title: 'Overview/Welcome',
  component: Welcome,
  args: {},
  argTypes: {},
} as Meta;

const Template: Story<WelcomeProps> = (args) => <Welcome {...args} />;

export const Basic = Template.bind({});
