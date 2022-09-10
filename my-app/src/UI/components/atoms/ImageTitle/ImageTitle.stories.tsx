import { Meta, Story } from '@storybook/react';
import { Theme } from '../../../utility/themes/Theme';
import { ImageTitle, ImageTitleProps } from './ImageTitle';

export default {
  title: 'Atoms/ImageTitle',
  component: ImageTitle,
  args: {
    title: 'SPOTLIGHT',
    subtitle: 'Media Streaming Platform',
    color: Theme.color.text,
    size: 'small',
  },
  argTypes: {},
} as Meta;

const Template: Story<ImageTitleProps> = (args) => <ImageTitle {...args} />;

export const Small = Template.bind({});

export const Medium = Template.bind({});
Medium.args = {
  ...Medium.args,
  size: 'medium',
};

export const NoSubtitle = Template.bind({});
NoSubtitle.args = {
  ...NoSubtitle.args,
  subtitle: undefined,
};
