import { Meta, Story } from '@storybook/react';
import { Icon, IconProps } from './Icon';

export default {
    title: 'Other/Icon',
    component: Icon,
    args: {
      src: `/icons/Photoshop.svg`,
      size: 20, 
    },
} as Meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const Small = Template.bind({});
Small.args = {
  ...Small.args,
  src: `/icons/Photoshop.svg`,
  size: 16, 
}

export const Large = Template.bind({});
Large.args = {
  ...Large.args,
  src: `/icons/Photoshop.svg`,
  size: 32, 
}