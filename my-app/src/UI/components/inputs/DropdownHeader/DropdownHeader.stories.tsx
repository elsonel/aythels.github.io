import { Meta, Story } from '@storybook/react';
import { DropdownHeader, DropdownHeaderProps } from './DropdownHeader';
import { ChevronUpDown } from '@styled-icons/fluentui-system-regular/ChevronUpDown';

export default {
  title: 'Inputs/DropdownHeader',
  component: DropdownHeader,
  args: {
    size: 'medium',
    icon: ChevronUpDown,
    subtitle: 'SORT BY :\u00a0',
    title: 'NEWEST',
  },
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<DropdownHeaderProps> = (args) => (
  <DropdownHeader {...args} />
);

export const Medium = Template.bind({});

export const Small = Template.bind({});
Small.args = {
  ...Small.args,
  size: 'small',
};

export const NoText = Template.bind({});
NoText.args = {
  ...NoText.args,
  title: undefined,
};

export const LongText = Template.bind({});
LongText.args = {
  ...LongText.args,
  title:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non provident. FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF',
};
