import { Meta, Story } from '@storybook/react';
import { IconScroll, IconScrollProps } from './IconScroll';

export default {
  title: 'Atoms/IconScroll',
  component: IconScroll,
  args: { color: 'gray' },
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<IconScrollProps> = (args) => <IconScroll {...args} />;

export const Basic = Template.bind({});
