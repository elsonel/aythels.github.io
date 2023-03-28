import { Meta, Story } from '@storybook/react';
import { Divider, DividerProps } from './Divider';

export default {
  title: 'Groups/ProjectDetailsPage/Divider',
  component: Divider,
  args: {
    isLoaded: true,
    delay: 500,
  },
} as Meta;

const Template: Story<DividerProps> = (args) => <Divider {...args} />;

export const Basic = Template.bind({});
