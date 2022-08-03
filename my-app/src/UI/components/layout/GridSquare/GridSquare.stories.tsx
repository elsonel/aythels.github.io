import { Meta, Story } from '@storybook/react';
import { GridSquare, GridSquareProps } from './GridSquare';
import { ImageThumbnail } from '../../atoms/ImageThumbnail';

export default {
  title: 'Layout/GridSquare',
  component: GridSquare,
  args: {
    columnCount: 4,
    children: [<ImageThumbnail key={1} src="/example/square.jpg" />],
  },
} as Meta;

const Template: Story<GridSquareProps> = (args) => <GridSquare {...args} />;

export const Few = Template.bind({});
Few.args = {
  ...Few.args,
  children: [
    <ImageThumbnail
      key={1}
      src="/example/square.jpg"
      title="SOARING SKIES"
      subtitle="2020"
    />,
  ],
};

export const Many = Template.bind({});
Many.args = {
  ...Many.args,
  children: [
    <ImageThumbnail
      key={1}
      src="/example/square.jpg"
      title="SOARING SKIES"
      subtitle="2020"
    />,
    <ImageThumbnail
      key={2}
      src="/example/square.jpg"
      title="SOARING SKIES"
      subtitle="2020"
    />,
    <ImageThumbnail
      key={3}
      src="/example/square.jpg"
      title="SOARING SKIES"
      subtitle="2020"
    />,
    <ImageThumbnail
      key={4}
      src="/example/square.jpg"
      title="SOARING SKIES"
      subtitle="2020"
    />,
    <ImageThumbnail
      key={5}
      src="/example/square.jpg"
      title="SOARING SKIES"
      subtitle="2020"
    />,
  ],
};
