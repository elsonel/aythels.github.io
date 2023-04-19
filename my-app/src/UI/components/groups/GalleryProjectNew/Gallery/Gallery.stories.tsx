import { Meta, Story } from '@storybook/react';
import { Theme } from '../../../../utilities/themes/Theme';
import { Gallery, GalleryProps } from './Gallery';

export default {
  title: 'Groups/GalleryProjectNew/Gallery',
  component: Gallery,
  args: {
    title: 'KINETIC BOARDWALK',
    subtitle: 'Drifting Landscapes',
    imageSrc: Theme.image.exampleSquare,
  },
} as Meta;

const Template: Story<GalleryProps> = (args) => <Gallery {...args} />;

export const Basic = Template.bind({});
