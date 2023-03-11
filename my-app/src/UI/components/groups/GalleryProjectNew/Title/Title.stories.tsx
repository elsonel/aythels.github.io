import { Meta, Story } from '@storybook/react';
import { Title, TitleProps } from './Title';

export default {
  title: 'Groups/GalleryProjectNew/Title',
  component: Title,
  args: {
    children: 'KINETIC BOARDWALK',
    color: 'black',
  },
} as Meta;

const Template: Story<TitleProps> = (args) => <Title {...args} />;

export const Basic = Template.bind({});
