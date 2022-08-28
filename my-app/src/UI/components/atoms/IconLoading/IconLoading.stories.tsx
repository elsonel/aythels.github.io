import { Meta, Story } from '@storybook/react';
import { IconLoading, IconLoadingProps } from './IconLoading';

export default {
  title: 'Atoms/IconLoading',
  component: IconLoading,
  args: { size: 128 },
  argTypes: {},
} as Meta;

const Template: Story<IconLoadingProps> = (args) => <IconLoading {...args} />;

export const Basic = Template.bind({});
