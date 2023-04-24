import { Meta, Story } from '@storybook/react';
import { Theme } from '../../../utilities/themes/Theme';
import { GalleryModal, GalleryModalProps } from './GalleryModal';

export default {
  title: 'Groups/GalleryModal',
  component: GalleryModal,
  args: {
    srcList: [
      {
        src: Theme.image.exampleLandscape,
        alt: 'SKY 1',
      },
      {
        src: Theme.image.exampleSquare,
        alt: 'SQUARE 2',
      },
      {
        src: Theme.image.exampleLandscape,
        alt: 'SKY 3',
      },
      {
        src: Theme.image.exampleSquare,
        alt: 'SQUARE 4',
      },
      {
        src: Theme.image.examplePortrait,
        alt: 'PORTRAIT 5',
      },
      {
        src: Theme.image.exampleLandscape,
        alt: 'SKY 6',
      },
      {
        src: Theme.image.exampleSquare,
        alt: 'SQUARE 7',
      },
      {
        src: Theme.image.examplePortrait,
        alt: 'PORTRAIT 8',
      },
      {
        src: Theme.image.examplePortrait,
        alt: 'PORTRAIT 9',
      },
      {
        src: Theme.image.exampleLandscape,
        alt: 'SKY 10',
      },
      {
        src: Theme.image.exampleSquare,
        alt: 'SQUARE 11',
      },
      {
        src: Theme.image.examplePortrait,
        alt: 'PORTRAIT 12',
      },
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
  srcList: [
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
  srcList: [
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
  srcList: [
    {
      src: Theme.image.exampleLandscape,
      alt: 'SKY',
    },
  ],
};

export const NoCaption = Template.bind({});
NoCaption.args = {
  ...NoCaption.args,
  srcList: [
    {
      src: Theme.image.exampleLandscape,
      alt: '',
    },
  ],
};

export const LongCaption = Template.bind({});
LongCaption.args = {
  ...LongCaption.args,
  srcList: [
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
  srcList: [],
};
