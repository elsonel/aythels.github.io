import { Meta, Story } from '@storybook/react';
import { Dropdown, DropdownProps } from './Dropdown';

export default {
  title: 'Inputs/Dropdown',
  component: Dropdown,
  args: {
    labelPrefix: 'SORT :\u00A0',
    label: undefined,
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
  size: 'small',
};
