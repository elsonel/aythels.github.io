import { Meta, Story } from '@storybook/react';
import { Theme } from '../../../utilities/themes/Theme';
import { GalleryModal, GalleryModalProps } from './GalleryModal';

export default {
  title: 'Groups/GalleryModal',
  component: GalleryModal,
  args: {
    images: [
      { src: Theme.image.exampleLandscape, alt: 'LANDSCAPE' },
      { src: Theme.image.exampleSquare, alt: 'SQUARE' },
      { src: Theme.image.examplePortrait, alt: 'PORTRAIT' },
      { src: Theme.image.examplePortrait2, alt: 'IMAGE 2' },
      { src: Theme.image.examplePortrait3, alt: 'IMAGE 3' },
      { src: Theme.image.examplePortrait4, alt: 'IMAGE 4' },
      { src: Theme.image.examplePortrait5, alt: 'IMAGE 5' },
      { src: Theme.image.examplePortrait6, alt: 'IMAGE 6' },
      { src: Theme.image.exampleLandscape, alt: 'IMAGE 7' },
      { src: Theme.image.exampleLandscape2, alt: 'IMAGE 8' },
      { src: Theme.image.exampleLandscape3, alt: 'IMAGE 9' },
      { src: Theme.image.exampleLandscape4, alt: 'IMAGE 10' },
      { src: Theme.image.exampleLandscape5, alt: 'IMAGE 11' },
      { src: Theme.image.exampleLandscape6, alt: 'IMAGE 12' },
    ],
    initialIndex: 0,
    isVisible: true,
  },
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<GalleryModalProps> = (args) => <GalleryModal {...args} />;

export const Basic = Template.bind({});

export const WithOffset = Template.bind({});
WithOffset.args = {
  ...WithOffset.args,
  initialIndex: 1,
};

export const ThreeImage = Template.bind({});
ThreeImage.args = {
  ...ThreeImage.args,
  images: [
    {
      src: Theme.image.exampleLandscape,
      alt: 'SKY',
    },
    {
      src: Theme.image.exampleSquare,
      alt: 'SQUARE',
    },
    {
      src: Theme.image.examplePortrait,
      alt: 'PORTRAIT',
    },
  ],
};

export const TwoImage = Template.bind({});
TwoImage.args = {
  ...TwoImage.args,
  images: [
    {
      src: Theme.image.exampleLandscape,
      alt: 'SKY',
    },
    {
      src: Theme.image.exampleSquare,
      alt: 'SQUARE',
    },
  ],
};

export const OneImage = Template.bind({});
OneImage.args = {
  ...OneImage.args,
  images: [
    {
      src: Theme.image.exampleLandscape,
      alt: 'SKY',
    },
  ],
};

export const NoCaption = Template.bind({});
NoCaption.args = {
  ...NoCaption.args,
  images: [
    {
      src: Theme.image.exampleLandscape,
      alt: '',
    },
  ],
};

export const LongCaption = Template.bind({});
LongCaption.args = {
  ...LongCaption.args,
  images: [
    {
      src: Theme.image.exampleLandscape,
      alt: 'THIS IS A VERY VERY VERY VERY VERY VERY VERYYYYYYYYYYYYYYYYYYYYYYY LONG TITLEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE',
    },
    {
      src: Theme.image.exampleSquare,
      alt: 'THIS IS A VERY VERY VERY VERY VERY VERY VERYYYYYYYYYYYYYYYYYYYYYYY LONG TITLEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE',
    },
  ],
};

export const NoImage = Template.bind({});
NoImage.args = {
  ...NoImage.args,
  images: [],
};
