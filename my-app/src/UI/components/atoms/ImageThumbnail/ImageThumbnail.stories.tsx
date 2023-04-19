import { Meta, Story } from '@storybook/react';
import { Theme } from '../../../utilities/themes/Theme';
import { ImageTitle } from '../ImageTitle';
import { ImageThumbnail, ImageThumbnailProps } from './ImageThumbnail';

export default {
  title: 'Atoms/ImageThumbnail',
  component: ImageThumbnail,
  args: {
    src: Theme.image.exampleSquare,
    overlayElement: (
      <ImageTitle
        color={Theme.color.background}
        title="SOARING SKIES"
        subtitle="2022"
      />
    ),
    isFillingParent: false,
    isOverlayElement: undefined,
    isAlwaysHovered: undefined,
  },
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<ImageThumbnailProps> = (args) => (
  <ImageThumbnail {...args} />
);

export const Square = Template.bind({});

export const Portrait = Template.bind({});
Portrait.args = {
  ...Portrait.args,
  src: Theme.image.examplePortrait,
};

export const Landscape = Template.bind({});
Landscape.args = {
  ...Landscape.args,
  src: Theme.image.exampleLandscape,
};

export const AlwaysVisibleText = Template.bind({});
AlwaysVisibleText.args = {
  ...AlwaysVisibleText.args,
  isOverlayVisible: true,
};

export const AlwaysHoveredBack = Template.bind({});
AlwaysHoveredBack.args = {
  ...AlwaysHoveredBack.args,
  isBackHovered: true,
};
