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
  },
  argTypes: {},
} as Meta;

const Template: Story<ImageTitleProps> = (args) => <ImageTitle {...args} />;

export const Basic = Template.bind({});

export const NoSubtitle = Template.bind({});
NoSubtitle.args = {
  ...NoSubtitle.args,
  subtitle: undefined,
};
