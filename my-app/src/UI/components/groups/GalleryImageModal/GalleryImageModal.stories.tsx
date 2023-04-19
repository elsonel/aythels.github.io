import { Meta, Story } from '@storybook/react';
import { Theme } from '../../../utilities/themes/Theme';
import { GalleryImageModal, GalleryImageModalProps } from './GalleryImageModal';

export default {
  title: 'Groups/GalleryImageModal',
  component: GalleryImageModal,
  args: {
    srcArray: [
      {
        src: Theme.image.exampleLandscape,
        title: 'SKY',
      },
      {
        src: Theme.image.exampleSquare,
        title: 'SQUARE',
      },
      {
        src: Theme.image.exampleLandscape,
        title: 'SKY',
      },
      {
        src: Theme.image.exampleSquare,
        title: 'SQUARE',
      },
      {
        src: Theme.image.examplePortrait,
        title: 'PORTRAIT',
      },
      {
        src: Theme.image.exampleLandscape,
        title: 'SKY',
      },
      {
        src: Theme.image.exampleSquare,
        title: 'SQUARE',
      },
      {
        src: Theme.image.examplePortrait,
        title: 'PORTRAIT',
      },
      {
        src: Theme.image.examplePortrait,
        title: 'PORTRAIT',
      },
      {
        src: Theme.image.exampleLandscape,
        title: 'SKY',
      },
      {
        src: Theme.image.exampleSquare,
        title: 'SQUARE',
      },
      {
        src: Theme.image.examplePortrait,
        title: 'PORTRAIT',
      },
    ],
    indexOffset: 0,
    isVisible: true,
  },
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<GalleryImageModalProps> = (args) => (
  <GalleryImageModal {...args} />
);

export const Basic = Template.bind({});

export const WithOffset = Template.bind({});
WithOffset.args = {
  ...WithOffset.args,
  indexOffset: 1,
};

export const ThreeImage = Template.bind({});
ThreeImage.args = {
  ...ThreeImage.args,
  srcArray: [
    {
      src: Theme.image.exampleLandscape,
      title: 'SKY',
    },
    {
      src: Theme.image.exampleSquare,
      title: 'SQUARE',
    },
    {
      src: Theme.image.examplePortrait,
      title: 'PORTRAIT',
    },
  ],
};

export const TwoImage = Template.bind({});
TwoImage.args = {
  ...TwoImage.args,
  srcArray: [
    {
      src: Theme.image.exampleLandscape,
      title: 'SKY',
    },
    {
      src: Theme.image.exampleSquare,
      title: 'SQUARE',
    },
  ],
};

export const OneImage = Template.bind({});
OneImage.args = {
  ...OneImage.args,
  srcArray: [
    {
      src: Theme.image.exampleLandscape,
      title: 'SKY',
    },
  ],
};

export const NoCaption = Template.bind({});
NoCaption.args = {
  ...NoCaption.args,
  srcArray: [
    {
      src: Theme.image.exampleLandscape,
      title: undefined,
    },
  ],
};

export const LongCaption = Template.bind({});
LongCaption.args = {
  ...LongCaption.args,
  srcArray: [
    {
      src: Theme.image.exampleLandscape,
      title:
        'THIS IS A VERY VERY VERY VERY VERY VERY VERYYYYYYYYYYYYYYYYYYYYYYY LONG TITLEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE',
    },
    {
      src: Theme.image.exampleSquare,
      title:
        'THIS IS A VERY VERY VERY VERY VERY VERY VERYYYYYYYYYYYYYYYYYYYYYYY LONG TITLEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE',
    },
  ],
};

export const NoImage = Template.bind({});
NoImage.args = {
  ...NoImage.args,
  srcArray: [],
};
