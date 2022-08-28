import { Meta, Story } from '@storybook/react';
import { GridDynamic, GridDynamicProps } from './GridDynamic';
import { ImageThumbnail } from '../../atoms/ImageThumbnail';

export default {
  title: 'Layout/GridDynamic',
  component: GridDynamic,
  args: { children: <ImageThumbnail src="/thumbnails/thumb.jpg" /> },
} as Meta;

const Template: Story<GridDynamicProps> = (args) => <GridDynamic {...args} />;

export const Few = Template.bind({});
Few.args = {
  ...Few.args,
  children: [
    <ImageThumbnail
      key={0}
      src="/thumbnails/thumb.jpg"
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
