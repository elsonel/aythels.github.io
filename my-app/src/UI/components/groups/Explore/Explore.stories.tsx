import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Theme } from '../../../utility/themes/Theme';
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
        src={Theme.image.exampleSquare}
        title="1"
        isTextAlwaysVisible={true}
      />,
      <ImageThumbnail
        key="2"
        src={Theme.image.exampleSquare}
        title="2"
        isTextAlwaysVisible={true}
      />,
      <ImageThumbnail
        key="3"
        src={Theme.image.exampleSquare}
        title="3"
        isTextAlwaysVisible={true}
      />,
      <ImageThumbnail
        key="4"
        src={Theme.image.exampleSquare}
        title="4"
        isTextAlwaysVisible={true}
      />,
      <ImageThumbnail
        key="5"
        src={Theme.image.exampleSquare}
        title="5"
        isTextAlwaysVisible={true}
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
      src={Theme.image.exampleSquare}
      title="1"
      isTextAlwaysVisible={true}
    />,
    <ImageThumbnail
      key="2"
      src={Theme.image.exampleSquare}
      title="2"
      isTextAlwaysVisible={true}
    />,
    <ImageThumbnail
      key="3"
      src={Theme.image.exampleSquare}
      title="3"
      isTextAlwaysVisible={true}
    />,
    <ImageThumbnail
      key="4"
      src={Theme.image.exampleSquare}
      title="4"
      isTextAlwaysVisible={true}
    />,
  ],
};

export const Few = Template.bind({});
Few.args = {
  ...Few.args,
  children: [<ImageThumbnail key={0} src={Theme.image.exampleSquare} />],
};

export const Empty = Template.bind({});
Empty.args = {
  ...Empty.args,
  children: [],
};
