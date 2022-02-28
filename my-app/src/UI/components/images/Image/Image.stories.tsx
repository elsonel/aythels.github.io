import { Meta, Story } from '@storybook/react';
import { Image, ImageProps } from './Image';

export default {
    title: 'Images/Base',
    component: Image,
    args: {
        src: `/thumbnails/thumb.jpg`,
    },
} as Meta;

const Template: Story<ImageProps> = (args) => <Image {...args} />;

export const thumbnail = Template.bind({});

export const full = Template.bind({});
full.args = {
  ...full.args,
  src: `/images/sky.jpg`,
};