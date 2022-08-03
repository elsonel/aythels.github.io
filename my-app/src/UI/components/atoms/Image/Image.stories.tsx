import { Meta, Story } from '@storybook/react';
import { Image, ImageProps } from './Image';

export default {
  title: 'Atoms/Image',
  component: Image,
  args: {
    src: '/example/landscape.jpg',
  },
} as Meta;

const Template: Story<ImageProps> = (args) => <Image {...args} />;

export const Basic = Template.bind({});
