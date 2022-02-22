import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  args: {
    primary: 'true',
    size: 'small',
    label: 'Feature',
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = Template.bind({});
Primary.args = {
  ...Primary.args,
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Secondary.args,
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  ...Large.args,
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  ...Small.args,
  size: 'small',
  label: 'Button',
};
