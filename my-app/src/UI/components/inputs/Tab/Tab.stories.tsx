import { Meta, Story } from '@storybook/react';
import { Tab, TabProps } from './Tab';

export default {
  title: 'Inputs/Tab',
  component: Tab,
  args: {
    children: 'VISUAL ARTS',
    isSelected: false,
    onClick: () => {},
  },
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<TabProps> = (args) => <Tab {...args} />;

export const Basic = Template.bind({});

export const Selected = Template.bind({});
Selected.args = {
  ...Selected.args,
  isSelected: true,
};
