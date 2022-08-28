import { Meta, Story } from '@storybook/react';
import React from 'react';
import { ImageThumbnail } from '../../atoms/ImageThumbnail';
import { Explore, ExploreProps } from './Explore';

export default {
  title: 'Groups/Explore',
  component: Explore,
  args: {
    title: 'EXPLORE',
    children: [
      <ImageThumbnail
        key="1"
        src="/example/square.jpg"
        title="1"
        isTitleVisible={true}
      />,
      <ImageThumbnail
        key="2"
        src="/example/square.jpg"
        title="2"
        isTitleVisible={true}
      />,
      <ImageThumbnail
        key="3"
        src="/example/square.jpg"
        title="3"
        isTitleVisible={true}
      />,
      <ImageThumbnail
        key="4"
        src="/example/square.jpg"
        title="4"
        isTitleVisible={true}
      />,
      <ImageThumbnail
        key="5"
        src="/example/square.jpg"
        title="5"
        isTitleVisible={true}
      />,
    ],
  },
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<ExploreProps> = (args) => <Explore {...args} />;

export const Many = Template.bind({});

export const Exact = Template.bind({});
Exact.args = {
  ...Exact.args,
  children: [
    <ImageThumbnail
      key="1"
      src="/example/square.jpg"
      title="1"
      isTitleVisible={true}
    />,
    <ImageThumbnail
      key="2"
      src="/example/square.jpg"
      title="2"
      isTitleVisible={true}
    />,
    <ImageThumbnail
      key="3"
      src="/example/square.jpg"
      title="3"
      isTitleVisible={true}
    />,
    <ImageThumbnail
      key="4"
      src="/example/square.jpg"
      title="4"
      isTitleVisible={true}
    />,
  ],
};

export const Few = Template.bind({});
Few.args = {
  ...Few.args,
  children: [<ImageThumbnail key={0} src="/example/square.jpg" />],
};

export const Empty = Template.bind({});
Empty.args = {
  ...Empty.args,
  children: [],
};
