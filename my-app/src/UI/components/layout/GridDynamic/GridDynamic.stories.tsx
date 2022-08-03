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
      src="/example/landscape.jpg"
      title="SOARING SKIES"
      subtitle="2020"
    />,
    <ImageThumbnail
      src="/example/portrait.jpg"
      title="SOARING SKIES"
      subtitle="2020"
    />,
    <ImageThumbnail
      src="/example/portrait.jpg"
      title="SOARING SKIES"
      subtitle="2020"
    />,
    <ImageThumbnail
      src="/example/square.jpg"
      title="SOARING SKIES"
      subtitle="2020"
    />,
    <ImageThumbnail
      src="/example/square.jpg"
      title="SOARING SKIES"
      subtitle="2020"
    />,
    <ImageThumbnail
      src="/example/portrait.jpg"
      title="SOARING SKIES"
      subtitle="2020"
    />,
    <ImageThumbnail
      src="/example/square.jpg"
      title="SOARING SKIES"
      subtitle="2020"
    />,
    <ImageThumbnail
      src="/example/landscape.jpg"
      title="SOARING SKIES"
      subtitle="2020"
    />,
    <ImageThumbnail
      src="/example/landscape.jpg"
      title="SOARING SKIES"
      subtitle="2020"
    />,
  ],
};
