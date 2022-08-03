import { Meta, Story } from '@storybook/react';
import { Icon, IconProps } from './Icon';

export default {
  title: 'Atoms/Icon',
  component: Icon,
  args: {
    src: '/icons/Photoshop.svg',
    alt: 'Photoshop',
    size: 20,
  },
} as Meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const Small = Template.bind({});
Small.args = {
  ...Small.args,
  size: 16,
};

export const Large = Template.bind({});
Large.args = {
  ...Large.args,
  size: 32,
};
