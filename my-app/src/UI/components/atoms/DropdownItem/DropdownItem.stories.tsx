import { Meta, Story } from '@storybook/react';
import { DropdownItem, DropdownItemProps } from './DropdownItem';

export default {
  title: 'Atoms/DropdownItem',
  component: DropdownItem,
  args: {
    size: 'medium',
    children: 'NEWEST',
    isSelected: false,
  },
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<DropdownItemProps> = (args) => <DropdownItem {...args} />;

export const Medium = Template.bind({});

export const Small = Template.bind({});
Small.args = {
  ...Small.args,
  size: 'small',
};

export const Selected = Template.bind({});
Selected.args = {
  ...Selected.args,
  isSelected: true,
};

export const NoText = Template.bind({});
NoText.args = {
  ...NoText.args,
  children: '',
};

export const LongText = Template.bind({});
LongText.args = {
  ...LongText.args,
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non provident. FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF',
};
