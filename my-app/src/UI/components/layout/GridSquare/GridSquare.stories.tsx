import { Meta, Story } from '@storybook/react';
import { GridSquare, GridSquareProps } from './GridSquare';
import { Thumbnail } from '../../images/Thumbnail/Thumbnail';

export default {
    title: 'Layout/GridSquare',
    component: GridSquare,
    args: {children: <Thumbnail src="/thumbnails/thumb.jpg"/>},
} as Meta;

const Template: Story<GridSquareProps> = (args) => (
  <GridSquare {...args}>
    <Thumbnail src="/thumbnails/thumb.jpg" title="SOARING SKIES" subtitle="2020"/>
    <Thumbnail src="/thumbnails/thumb.jpg" title="SOARING SKIES" subtitle="2020"/>
    <Thumbnail src="/thumbnails/thumb.jpg" title="SOARING SKIES" subtitle="2020"/>
    <Thumbnail src="/thumbnails/thumb.jpg" title="SOARING SKIES" subtitle="2020"/>
    <Thumbnail src="/thumbnails/thumb.jpg" title="SOARING SKIES" subtitle="2020"/>
  </GridSquare>
);

export const Basic = Template.bind({});