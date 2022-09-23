import { Meta, Story } from '@storybook/react';
import { Theme } from '../../../utility/themes/Theme';
import {
  ImageThumbnailAspect,
  ImageThumbnailAspectProps,
} from './ImageThumbnailAspect';

export default {
  title: 'Atoms/ImageThumbnailAspect',
  component: ImageThumbnailAspect,
  args: {
    aspect: 1,
    src: Theme.image.exampleSquare,
    isFillingParent: false,
  },
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<ImageThumbnailAspectProps> = (args) => (
  <ImageThumbnailAspect {...args} />
);

export const Square = Template.bind({});
Square.args = {
  ...Square.args,
  aspect: 1,
};

export const Portrait = Template.bind({});
Portrait.args = {
  ...Portrait.args,
  aspect: 0.5,
};

export const Landscape = Template.bind({});
Landscape.args = {
  ...Landscape.args,
  aspect: 2,
};
