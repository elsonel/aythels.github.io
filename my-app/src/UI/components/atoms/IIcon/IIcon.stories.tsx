import { Meta, Story } from '@storybook/react';
import { IIcon, IIconProps } from './IIcon';

export default {
  title: 'Atoms/IIcon',
  component: IIcon,
  args: { size: 32, children: 'Hello' },
  argTypes: {},
} as Meta;

const Template: Story<IIconProps> = (args) => <IIcon {...args} />;

export const Small = Template.bind({});
Small.args = {
  ...Small.args,
};

export const Large = Template.bind({});
Large.args = {
  ...Large.args,
  size: 64,
};
