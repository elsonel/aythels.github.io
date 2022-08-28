import { Meta, Story } from '@storybook/react';
import { DropdownHeader } from '../../atoms/DropdownHeader';
import { ChevronUpDown } from '@styled-icons/fluentui-system-regular/ChevronUpDown';
import { Dropdown, DropdownProps } from './Dropdown';

export default {
  title: 'Inputs/Dropdown',
  component: Dropdown,
  args: {
    header: (
      <DropdownHeader
        icon={<ChevronUpDown />}
        subtitle="SORT :&nbsp;"
        title="NEWEST"
      />
    ),
    tabs: [
      {
        isSelected: true,
        label: 'NEWEST',
        onClick: () => {},
      },
      {
        isSelected: false,
        label: 'OLDEST',
        onClick: () => {},
      },
      {
        isSelected: false,
        label: 'A - Z',
        onClick: () => {},
      },
      {
        isSelected: false,
        label: 'Z - A',
        onClick: () => {},
      },
    ],
  },
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;

export const Medium = Template.bind({});

export const Small = Template.bind({});
Small.args = {
  ...Small.args,
  header: (
    <DropdownHeader
      size="small"
      icon={<ChevronUpDown />}
      subtitle="SORT :&nbsp;"
      title="NEWEST"
    />
  ),
  size: 'small',
};
