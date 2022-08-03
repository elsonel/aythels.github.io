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
  src: '/example/square.jpg',
  title: 'SOARING SKIES',
  subtitle: '2020',
  isTitleVisible: true,
};

export const LongText = Template.bind({});
LongText.args = {
  ...LongText.args,
  src: '/example/square.jpg',
  title: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
  subtitle: '222222222222222222222222222222222222222222222222',
};
