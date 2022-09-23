import { Meta, Story } from '@storybook/react';
import { Theme } from '../../../utility/themes/Theme';
import { ImageThumbnail, ImageThumbnailProps } from './ImageThumbnail';

export default {
  title: 'Atoms/ImageThumbnail',
  component: ImageThumbnail,
  args: {
    src: Theme.image.exampleSquare,
    title: 'SOARING SKIES',
    subtitle: '2020',
    isTextAlwaysVisible: false,
    isFillingParent: false,
  },
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<ImageThumbnailProps> = (args) => (
  <ImageThumbnail {...args} />
);

export const Square = Template.bind({});

export const Portrait = Template.bind({});
Portrait.args = {
  ...Portrait.args,
  src: Theme.image.examplePortrait,
};

export const Landscape = Template.bind({});
Landscape.args = {
  ...Landscape.args,
  src: Theme.image.exampleLandscape,
};

export const AlwaysVisibleText = Template.bind({});
AlwaysVisibleText.args = {
  ...AlwaysVisibleText.args,
  isTextAlwaysVisible: true,
};

export const LongText = Template.bind({});
LongText.args = {
  ...LongText.args,
  isTextAlwaysVisible: true,
  title: 'SOARING SKIESSSSSSSSSSSSSSSSSSSSSSSSSSSSSS',
  subtitle: '202000000000000000000000000000000000000',
};
