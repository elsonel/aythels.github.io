import { Meta, Story } from '@storybook/react';
import { Theme } from '../../../utility/themes/Theme';
import { GalleryImageModal, GalleryImageModalProps } from './GalleryImageModal';

export default {
  title: 'Groups/GalleryImageModal',
  component: GalleryImageModal,
  args: {
    srcArray: [
      {
        src: Theme.image.exampleLandscape,
        title: 'SKY',
        caption: 'This is the image caption 1.',
      },
      {
        src: Theme.image.exampleSquare,
        title: 'SQUARE',
        caption: 'This is the image caption 2.',
      },
      {
        src: Theme.icon.exampleIconBasic,
        title: 'LOGO',
        caption: 'This is the image caption 3.',
      },
      {
        src: Theme.image.examplePortrait,
        title: 'ICON',
        caption: 'This is the image caption 4.',
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
      caption: 'This is the image caption 1.',
    },
    {
      src: Theme.image.exampleSquare,
      title: 'SQUARE',
      caption: 'This is the image caption 2.',
    },
    {
      src: Theme.icon.exampleIconBasic,
      title: 'LOGO',
      caption: 'This is the image caption 3.',
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
      caption: 'This is the image caption 1.',
    },
    {
      src: Theme.image.exampleSquare,
      title: 'SQUARE',
      caption: 'This is the image caption 2.',
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
      caption: 'This is the image caption 1.',
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
      caption: undefined,
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
      caption:
        'THIS IS A VERY VERY VERY VERY VERY VERY VERYYYYYYYYYYYYYYYYYYYYYYY LONG TITLEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE',
    },
    {
      src: Theme.image.exampleSquare,
      title:
        'THIS IS A VERY VERY VERY VERY VERY VERY VERYYYYYYYYYYYYYYYYYYYYYYY LONG TITLEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE',
      caption:
        'THIS IS A VERY VERY VERY VERY VERY VERY VERYYYYYYYYYYYYYYYYYYYYYYY LONG TITLEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE',
    },
  ],
};

export const NoImage = Template.bind({});
NoImage.args = {
  ...NoImage.args,
  srcArray: [],
};
