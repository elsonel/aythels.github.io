import { Meta, Story } from '@storybook/react';
import { GridRow, GridRowProps } from './GridRow';
import { ImageThumbnail } from '../../atoms/ImageThumbnail';
import { Theme } from '../../../utility/themes/Theme';

export default {
  title: 'Layout/GridRow',
  component: GridRow,
  args: {
    children: [<ImageThumbnail key={1} src={Theme.image.exampleSquare} />],
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
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
} as Meta;

const Template: Story<GridRowProps> = (args) => <GridRow {...args} />;

export const Few = Template.bind({});
Few.args = {
  ...Few.args,
  children: [
    <ImageThumbnail
      key={1}
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
      key={1}
      src={Theme.image.exampleSquare}
      title="SOARING SKIES"
      subtitle="2020"
    />,
    <ImageThumbnail
      key={2}
      src={Theme.image.exampleSquare}
      title="SOARING SKIES"
      subtitle="2020"
    />,
    <ImageThumbnail
      key={3}
      src={Theme.image.exampleSquare}
      title="SOARING SKIES"
      subtitle="2020"
    />,
    <ImageThumbnail
      key={4}
      src={Theme.image.exampleSquare}
      title="SOARING SKIES"
      subtitle="2020"
    />,
    <ImageThumbnail
      key={5}
      src={Theme.image.exampleSquare}
      title="SOARING SKIES"
      subtitle="2020"
    />,
  ],
};
