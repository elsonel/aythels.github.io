import { Meta, Story } from '@storybook/react';
import { Theme } from '../../../utility/themes/Theme';
import { ImageTitle } from '../ImageTitle';
import {
  GalleryImageThumbnail,
  GalleryImageThumbnailProps,
} from './GalleryImageThumbnail';

export default {
  title: 'Atoms/GalleryImageThumbnail',
  component: GalleryImageThumbnail,
  args: {
    src: Theme.image.exampleSquare,
  },
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<GalleryImageThumbnailProps> = (args) => (
  <GalleryImageThumbnail {...args} />
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
