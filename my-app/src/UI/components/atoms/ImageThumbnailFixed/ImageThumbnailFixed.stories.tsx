import { Meta, Story } from '@storybook/react';
import {
  ImageThumbnailFixed,
  ImageThumbnailFixedProps,
} from './ImageThumbnailFixed';

export default {
  title: 'Atoms/ImageThumbnailFixed',
  component: ImageThumbnailFixed,
  args: {
    src: '/example/landscape.jpg',
    title: 'SOARING SKIES',
    subtitle: '2020',
    isTitleVisible: false,
    containerSize: 500,
    imageWidth: 200,
    imageHeight: 100,
  },
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<ImageThumbnailFixedProps> = (args) => (
  <ImageThumbnailFixed {...args} />
);

export const Landscape = Template.bind({});

export const Portrait = Template.bind({});
Portrait.args = {
  ...Portrait.args,
  imageWidth: 100,
  imageHeight: 200,
};
