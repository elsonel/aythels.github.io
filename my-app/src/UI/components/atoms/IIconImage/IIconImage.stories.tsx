import { Meta, Story } from '@storybook/react';
import { Theme } from '../../../utilities/themes/Theme';
import { IIconImage, IIconImageProps } from './IIconImage';

export default {
  title: 'Atoms/IIconImage',
  component: IIconImage,
  args: { size: 32, src: Theme.icon.exampleIconColored },
  argTypes: {},
} as Meta;

const Template: Story<IIconImageProps> = (args) => <IIconImage {...args} />;

export const Small = Template.bind({});
Small.args = {
  ...Small.args,
};

export const Large = Template.bind({});
Large.args = {
  ...Large.args,
  size: 64,
};

export const NarrowIcon = Template.bind({});
NarrowIcon.args = {
  ...NarrowIcon.args,
  size: 64,
  src: Theme.icon.exampleIconThin,
};
