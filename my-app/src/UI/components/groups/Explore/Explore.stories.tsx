import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Theme } from '../../../utilities/themes/Theme';
import { Explore, ExploreProps } from './Explore';
import { ImageThumbnail } from '../../atoms/ImageThumbnail';
import { ImageTitle } from '../../atoms/ImageTitle';

let key = 0;
function createImageThumbnail(src: string, label: string = '2022') {
  key += 1;
  return (
    <ImageThumbnail
      key={key}
      src={src}
      alt={src}
      overlayElement={
        <ImageTitle
          color={Theme.color.background}
          title="SOARING SKIES"
          subtitle={label}
        />
      }
      isOverlayVisible={true}
    />
  );
}

export default {
  title: 'Groups/Explore',
  component: Explore,
  args: {
    title: 'EXPLORE',
    children: [
      createImageThumbnail(Theme.image.exampleSquare),
      createImageThumbnail(Theme.image.exampleSquare),
      createImageThumbnail(Theme.image.exampleSquare),
      createImageThumbnail(Theme.image.exampleSquare),
      createImageThumbnail(Theme.image.exampleSquare),
      createImageThumbnail(Theme.image.exampleSquare),
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
    createImageThumbnail(Theme.image.exampleSquare),
    createImageThumbnail(Theme.image.exampleSquare),
    createImageThumbnail(Theme.image.exampleSquare),
    createImageThumbnail(Theme.image.exampleSquare),
  ],
};

export const Few = Template.bind({});
Few.args = {
  ...Few.args,
  children: [createImageThumbnail(Theme.image.exampleSquare)],
};

export const Empty = Template.bind({});
Empty.args = {
  ...Empty.args,
  children: [],
};
