import { Meta, Story } from '@storybook/react';
import { Chip, ChipProps } from './Chip';
import { DesignServices } from '@styled-icons/material/DesignServices';

export default {
    title: 'Other/Chip',
    component: Chip,
    args: {
      icon: <DesignServices/>,
      label: "GRAPHIC DESIGN",
      size: 20,
    },
} as Meta;

const Template: Story<ChipProps> = (args) => <Chip {...args} />;

export const Long = Template.bind({});
Long.args = {
  ...Long.args,
  icon: <DesignServices/>,
  label: "GRAPHIC DESIGN",
}

export const Short = Template.bind({});
Short.args = {
  ...Short.args,
  label: "CSS",
};

export const ShortLargeIcon = Template.bind({});
ShortLargeIcon.args = {
  ...ShortLargeIcon.args,
  label: "CSS",
  size: 32,
};