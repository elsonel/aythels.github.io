import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Theme } from '../../../utilities/themes/Theme';
import { Experience, ExperienceProps } from './Experience';
import { ImageThumbnail } from '../../atoms/ImageThumbnail';
import { ImageTitle } from '../../atoms/ImageTitle';

export default {
  title: 'Groups/Experience',
  component: Experience,
  args: {
    title: 'Experience',
  },
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<ExperienceProps> = (args) => <Experience {...args} />;

export const Basic = Template.bind({});
