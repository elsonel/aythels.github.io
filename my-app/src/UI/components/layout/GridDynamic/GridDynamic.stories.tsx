import { Meta, Story } from '@storybook/react';
import { GridDynamic, GridDynamicProps } from './GridDynamic';
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
  title: 'Layout/GridDynamic',
  component: GridDynamic,
  args: {
    children: createImageThumbnail(Theme.image.exampleSquare),
  },
} as Meta;

const Template: Story<GridDynamicProps> = (args) => <GridDynamic {...args} />;

export const Few = Template.bind({});
Few.args = {
  ...Few.args,
  children: [
    createImageThumbnail(Theme.image.exampleSquare),
    createImageThumbnail(Theme.image.exampleSquare),
  ],
};

export const Many = Template.bind({});
Many.args = {
  ...Many.args,
  children: [
    createImageThumbnail(Theme.image.exampleLandscape, '0'),
    createImageThumbnail(Theme.image.examplePortrait, '1'),
    createImageThumbnail(Theme.image.examplePortrait, '2'),
    createImageThumbnail(Theme.image.examplePortrait, '3'),
    createImageThumbnail(Theme.image.exampleSquare, '4'),
    createImageThumbnail(Theme.image.exampleSquare, '5'),
    createImageThumbnail(Theme.image.examplePortrait, '6'),
    createImageThumbnail(Theme.image.exampleSquare, '7'),
    createImageThumbnail(Theme.image.exampleLandscape, '8'),
    createImageThumbnail(Theme.image.exampleLandscape, '9'),
  ],
};

export const RenderOrderTest = Template.bind({});
RenderOrderTest.args = {
  ...RenderOrderTest.args,
  children: [
    createImageThumbnail(Theme.image.exampleLandscape, '0'),
    createImageThumbnail(Theme.image.exampleLandscape, '1'),
    createImageThumbnail(Theme.image.exampleLandscape, '2'),
    createImageThumbnail(Theme.image.exampleLandscape, '3'),
    createImageThumbnail(Theme.image.exampleLandscape, '4'),
    createImageThumbnail(Theme.image.exampleLandscape, '5'),
    createImageThumbnail(Theme.image.exampleLandscape, '6'),
    createImageThumbnail(Theme.image.exampleLandscape, '7'),
    createImageThumbnail(Theme.image.exampleLandscape, '8'),
    createImageThumbnail(Theme.image.exampleLandscape, '9'),
  ],
};
