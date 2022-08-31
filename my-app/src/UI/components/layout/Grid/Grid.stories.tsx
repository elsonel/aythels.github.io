import { Meta, Story } from '@storybook/react';
import { Grid, GridProps } from './Grid';
import { ImageThumbnail } from '../../atoms/ImageThumbnail';

export default {
  title: 'Layout/Grid',
  component: Grid,
  args: {
    children: [<ImageThumbnail key={1} src="/example/square.jpg" />],
    breakpoints: [
      {
        minWidth: 0,
        columnCount: 1,
      },
      {
        minWidth: 600,
        columnCount: 2,
      },
      {
        minWidth: 800,
        columnCount: 3,
      },
      {
        minWidth: 1200,
        columnCount: 4,
      },
    ],
  },
} as Meta;

const Template: Story<GridProps> = (args) => <Grid {...args} />;

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

export const ManySquare = Template.bind({});
ManySquare.args = {
  ...ManySquare.args,
  children: [
    <ImageThumbnail
      key={1}
      src="/example/square.jpg"
      title="SOARING SKIES"
      subtitle="2020"
      imageWidth={1}
      imageHeight={1}
    />,
    <ImageThumbnail
      key={2}
      src="/example/square.jpg"
      title="SOARING SKIES"
      subtitle="2020"
      imageWidth={1}
      imageHeight={1}
    />,
    <ImageThumbnail
      key={3}
      src="/example/square.jpg"
      title="SOARING SKIES"
      subtitle="2020"
      imageWidth={1}
      imageHeight={1}
    />,
    <ImageThumbnail
      key={4}
      src="/example/square.jpg"
      title="SOARING SKIES"
      subtitle="2020"
      imageWidth={1}
      imageHeight={1}
    />,
    <ImageThumbnail
      key={5}
      src="/example/square.jpg"
      title="SOARING SKIES"
      subtitle="2020"
      imageWidth={1}
      imageHeight={1}
    />,
  ],
};

export const ManyVaried = Template.bind({});
ManyVaried.args = {
  ...ManyVaried.args,
  children: [
    <ImageThumbnail
      key={0}
      src="/example/landscape.jpg"
      title="SOARING SKIES"
      subtitle="0"
      isTitleVisible={true}
    />,
    <ImageThumbnail
      key={1}
      src="/example/portrait.jpg"
      title="SOARING SKIES"
      subtitle="1"
      isTitleVisible={true}
    />,
    <ImageThumbnail
      key={2}
      src="/example/portrait.jpg"
      title="SOARING SKIES"
      subtitle="2"
      isTitleVisible={true}
    />,
    <ImageThumbnail
      key={3}
      src="/example/square.jpg"
      title="SOARING SKIES"
      subtitle="3"
      isTitleVisible={true}
    />,
    <ImageThumbnail
      key={4}
      src="/example/square.jpg"
      title="SOARING SKIES"
      subtitle="4"
      isTitleVisible={true}
    />,
    <ImageThumbnail
      key={5}
      src="/example/portrait.jpg"
      title="SOARING SKIES"
      subtitle="5"
      isTitleVisible={true}
    />,
    <ImageThumbnail
      key={6}
      src="/example/square.jpg"
      title="SOARING SKIES"
      subtitle="6"
      isTitleVisible={true}
    />,
    <ImageThumbnail
      key={7}
      src="/example/landscape.jpg"
      title="SOARING SKIES"
      subtitle="7"
      isTitleVisible={true}
    />,
    <ImageThumbnail
      key={8}
      src="/example/landscape.jpg"
      title="SOARING SKIES"
      subtitle="8"
      isTitleVisible={true}
    />,
  ],
};
