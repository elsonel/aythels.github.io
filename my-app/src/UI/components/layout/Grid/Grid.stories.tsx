import { Meta, Story } from '@storybook/react';
import { Grid, GridProps } from './Grid';
import { ImageThumbnail } from '../../atoms/ImageThumbnail';
import { Theme } from '../../../utilities/themes/Theme';
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
  title: 'Layout/Grid',
  component: Grid,
  args: {
    children: [createImageThumbnail(Theme.image.exampleSquare)],
    breakpoints: [
      {
        minWidth: 0,
        columnCount: 1,
      },
      {
        minWidth: 600,
        columnCount: 2,
      },
      {
        minWidth: 800,
        columnCount: 3,
      },
      {
        minWidth: 1200,
        columnCount: 4,
      },
    ],
    gap: 20,
    _minusWidth: 0,
    isAnimated: true,
  },
} as Meta;

const Template: Story<GridProps> = (args) => <Grid {...args} />;

export const Few = Template.bind({});

export const ManySquare = Template.bind({});
ManySquare.args = {
  ...ManySquare.args,
  children: [
    createImageThumbnail(Theme.image.exampleSquare),
    createImageThumbnail(Theme.image.exampleSquare),
    createImageThumbnail(Theme.image.exampleSquare),
    createImageThumbnail(Theme.image.exampleSquare),
    createImageThumbnail(Theme.image.exampleSquare),
    createImageThumbnail(Theme.image.exampleSquare),
    createImageThumbnail(Theme.image.exampleSquare),
    createImageThumbnail(Theme.image.exampleSquare),
  ],
};

export const ManyVaried = Template.bind({});
ManyVaried.args = {
  ...ManyVaried.args,
  children: [
    createImageThumbnail(Theme.image.exampleLandscape),
    createImageThumbnail(Theme.image.examplePortrait),
    createImageThumbnail(Theme.image.examplePortrait),
    createImageThumbnail(Theme.image.examplePortrait),
    createImageThumbnail(Theme.image.exampleSquare),
    createImageThumbnail(Theme.image.exampleSquare),
    createImageThumbnail(Theme.image.examplePortrait),
    createImageThumbnail(Theme.image.exampleSquare),
    createImageThumbnail(Theme.image.exampleLandscape),
    createImageThumbnail(Theme.image.exampleLandscape),
  ],
};
