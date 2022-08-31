import { Meta, Story } from '@storybook/react';
import { ImageThumbnail, ImageThumbnailProps } from './ImageThumbnail';

export default {
  title: 'Atoms/ImageThumbnail',
  component: ImageThumbnail,
  args: {
    src: '/example/square.jpg',
    title: 'SOARING SKIES',
    subtitle: '2020',
    isTitleVisible: false,
    containerSize: 300,
    imageWidth: 100,
    imageHeight: 100,
  },
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<ImageThumbnailProps> = (args) => (
  <ImageThumbnail {...args} />
);

export const Basic = Template.bind({});

export const VisibleTitle = Template.bind({});
VisibleTitle.args = {
  ...VisibleTitle.args,
  isTitleVisible: true,
};

export const LongText = Template.bind({});
LongText.args = {
  ...LongText.args,
  isTitleVisible: true,
  title: 'SOARING SKIESSSSSSSSSSSSSSSSSSSSSSSSSSSSSS',
  subtitle: '202000000000000000000000000000000000000',
};

export const DifferentContainerSize = Template.bind({});
DifferentContainerSize.args = {
  ...DifferentContainerSize.args,
  containerSize: 400,
};

export const DifferentAspect = Template.bind({});
DifferentAspect.args = {
  ...DifferentAspect.args,
  imageWidth: 100,
  imageHeight: 200,
};
