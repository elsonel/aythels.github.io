import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ImageCard, IImageCardProps } from './ImageCard';
import { Theme } from '../../../../utilities/themes/Theme';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 300px;
`;

export default {
  title: 'Groups/ProjectDetailsPage/ImageCard',
  component: ImageCard,
  argTypes: { onClick: { action: 'clicked' } },
  args: {
    src: Theme.image.exampleSquareSmall,
    alt: 'image',
  },
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Template: Story<IImageCardProps> = (args) => (
  <Wrapper>
    <ImageCard {...args} />
  </Wrapper>
);

export const Basic = Template.bind({});
