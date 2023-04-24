import { Meta, Story } from '@storybook/react';
import { GridRow, GridRowProps } from './GridRow';
import { Theme } from '../../../utilities/themes/Theme';
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
  title: 'Layout/GridRow',
  component: GridRow,
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
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
} as Meta;

const Template: Story<GridRowProps> = (args) => <GridRow {...args} />;

export const Few = Template.bind({});
Few.args = {
  ...Few.args,
  children: [createImageThumbnail(Theme.image.exampleSquare)],
};

export const Many = Template.bind({});
Many.args = {
  ...Many.args,
  children: [
    createImageThumbnail(Theme.image.exampleSquare),
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
