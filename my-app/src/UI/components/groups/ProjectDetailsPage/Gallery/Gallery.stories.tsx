import { Meta, Story } from '@storybook/react';
import { Gallery, IGalleryProps } from './Gallery';
import React from 'react';

export default {
  title: 'Groups/ProjectDetailsPage/Gallery',
  component: Gallery,
  args: {},
} as Meta;

const Template: Story<IGalleryProps> = (args) => <Gallery {...args} />;

export const Basic = Template.bind({});
