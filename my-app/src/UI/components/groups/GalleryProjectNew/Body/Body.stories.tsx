import { Meta, Story } from '@storybook/react';
import { Theme } from '../../../../utility/themes/Theme';
import { Body, BodyProps } from './Body';

export default {
  title: 'Groups/GalleryProjectNew/Body',
  component: Body,
  args: {
    title: 'KINETIC BOARDWALK',
    subtitle: 'Drifting Landscapes',
    imageSrc: Theme.image.exampleSquare,
  },
} as Meta;

const Template: Story<BodyProps> = (args) => <Body {...args} />;

export const Basic = Template.bind({});
