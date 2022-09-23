import { Meta, Story } from '@storybook/react';
import { GridDynamic, GridDynamicProps } from './GridDynamic';
import { ImageThumbnail } from '../../atoms/ImageThumbnail';
import { Theme } from '../../../utility/themes/Theme';

export default {
  title: 'Layout/GridDynamic',
  component: GridDynamic,
  args: {
    children: <ImageThumbnail src={Theme.image.exampleSquare} />,
  },
} as Meta;

const Template: Story<GridDynamicProps> = (args) => <GridDynamic {...args} />;

export const Few = Template.bind({});
Few.args = {
  ...Few.args,
  children: [
    <ImageThumbnail
      key={0}
      src={Theme.image.exampleSquare}
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
      src={Theme.image.exampleLandscape}
      title="SOARING SKIES"
      subtitle="0"
      isTextAlwaysVisible={true}
    />,
    <ImageThumbnail
      key={1}
      src={Theme.image.examplePortrait}
      title="SOARING SKIES"
      subtitle="1"
      isTextAlwaysVisible={true}
    />,
    <ImageThumbnail
      key={2}
      src={Theme.image.examplePortrait}
      title="SOARING SKIES"
      subtitle="2"
      isTextAlwaysVisible={true}
    />,
    <ImageThumbnail
      key={3}
      src={Theme.image.exampleSquare}
      title="SOARING SKIES"
      subtitle="3"
      isTextAlwaysVisible={true}
    />,
    <ImageThumbnail
      key={4}
      src={Theme.image.exampleSquare}
      title="SOARING SKIES"
      subtitle="4"
      isTextAlwaysVisible={true}
    />,
    <ImageThumbnail
      key={5}
      src={Theme.image.examplePortrait}
      title="SOARING SKIES"
      subtitle="5"
      isTextAlwaysVisible={true}
    />,
    <ImageThumbnail
      key={6}
      src={Theme.image.exampleSquare}
      title="SOARING SKIES"
      subtitle="6"
      isTextAlwaysVisible={true}
    />,
    <ImageThumbnail
      key={7}
      src={Theme.image.exampleLandscape}
      title="SOARING SKIES"
      subtitle="7"
      isTextAlwaysVisible={true}
    />,
    <ImageThumbnail
      key={8}
      src={Theme.image.exampleLandscape}
      title="SOARING SKIES"
      subtitle="8"
      isTextAlwaysVisible={true}
    />,
  ],
};

export const RenderOrderTest = Template.bind({});
RenderOrderTest.args = {
  ...RenderOrderTest.args,
  children: [
    <ImageThumbnail
      key={0}
      src={Theme.image.exampleLandscape}
      title="SOARING SKIES"
      subtitle="0"
      isTextAlwaysVisible={true}
    />,
    <ImageThumbnail
      key={1}
      src={Theme.image.exampleLandscape}
      title="SOARING SKIES"
      subtitle="1"
      isTextAlwaysVisible={true}
    />,
    <ImageThumbnail
      key={2}
      src={Theme.image.exampleLandscape}
      title="SOARING SKIES"
      subtitle="2"
      isTextAlwaysVisible={true}
    />,
    <ImageThumbnail
      key={3}
      src={Theme.image.exampleLandscape}
      title="SOARING SKIES"
      subtitle="3"
      isTextAlwaysVisible={true}
    />,
    <ImageThumbnail
      key={4}
      src={Theme.image.exampleLandscape}
      title="SOARING SKIES"
      subtitle="4"
      isTextAlwaysVisible={true}
    />,
    <ImageThumbnail
      key={5}
      src={Theme.image.exampleLandscape}
      title="SOARING SKIES"
      subtitle="5"
      isTextAlwaysVisible={true}
    />,
    <ImageThumbnail
      key={6}
      src={Theme.image.exampleLandscape}
      title="SOARING SKIES"
      subtitle="6"
      isTextAlwaysVisible={true}
    />,
    <ImageThumbnail
      key={7}
      src={Theme.image.exampleLandscape}
      title="SOARING SKIES"
      subtitle="7"
      isTextAlwaysVisible={true}
    />,
    <ImageThumbnail
      key={8}
      src={Theme.image.exampleLandscape}
      title="SOARING SKIES"
      subtitle="8"
      isTextAlwaysVisible={true}
    />,
    <ImageThumbnail
      key={9}
      src={Theme.image.exampleLandscape}
      title="SOARING SKIES"
      subtitle="9"
      isTextAlwaysVisible={true}
    />,
  ],
};
