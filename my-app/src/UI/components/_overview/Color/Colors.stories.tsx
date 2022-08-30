import { Meta, Story } from '@storybook/react';
import { Colors, ColorsProps } from './Colors';

export default {
  title: 'Overview/Colors',
  component: Colors,
  args: {},
  argTypes: {},
} as Meta;

const Template: Story<ColorsProps> = (args) => <Colors {...args} />;

export const Basic = Template.bind({});
