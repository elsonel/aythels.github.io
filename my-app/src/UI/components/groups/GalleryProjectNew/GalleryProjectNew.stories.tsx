import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import { GalleryProjectNew, GalleryProjectNewProps } from '.';
import { ImageThumbnail } from '../../atoms/ImageThumbnail';
import { Grid, GridBreakpoint } from '../../layout/Grid';
import { Theme } from '../../../utilities/themes/Theme';
import { Frame } from '../../atoms/Frame/Frame';

const BREAKPOINTS: GridBreakpoint[] = [
  {
    minWidth: 0,
    columnCount: 1,
  },
  {
    minWidth: 600,
    columnCount: 2,
  },
  {
    minWidth: 1100,
    columnCount: 3,
  },
];

const Header = styled.div`
  z-index: ${({ theme }) => theme.layer.header};
  position: sticky;
  top: 0px;
  width: 100%;
  height: ${({ theme }) => theme.size.headerHeight}px;
  background-color: red;
`;

const GridStyled = styled(Grid)`
  padding: 0px;
`;

export default {
  title: 'Groups/GalleryProjectNew',
  component: GalleryProjectNew,
  args: {
    body: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ornare ligula a massa congue tempus. Vestibulum molestie efficitur risus, in commodo leo fringilla ut. Maecenas blandit nunc in purus rhoncus maximus efficitur eu ligula. Nam ullamcorper rhoncus luctus. Donec consectetur eget enim vel imperdiet. Suspendisse ut enim sit amet urna scelerisque gravida.',
      'In in urna sed elit sollicitudin ultrices. Aenean quis eros et augue congue tempor. Maecenas vel ornare magna, sit amet luctus lorem. Curabitur nisi felis, maximus at erat quis, rutrum interdum lectus. Aliquam vel enim sit amet lectus ullamcorper dignissim',
    ],
    facts: [
      {
        label: 'TYPE',
        value: 'Mobile Application',
      },
      {
        label: 'COMPLETION',
        value: 'June 2022',
      },
      {
        label: 'COLLABORATORS',
        value: 'Elson Liang, Xavier Woo, Perry Wang',
      },
      {
        label: 'GITHUB',
        value: 'Link',
        to: 'github.com',
      },
    ],
    children: [
      <GridStyled breakpoints={BREAKPOINTS} key={2}>
        <ImageThumbnail src={Theme.image.exampleSquare} />
        <ImageThumbnail src={Theme.image.exampleSquare} />
        <ImageThumbnail src={Theme.image.exampleSquare} />
        <ImageThumbnail src={Theme.image.exampleSquare} />
        <ImageThumbnail src={Theme.image.exampleSquare} />
        <ImageThumbnail src={Theme.image.exampleSquare} />
        <ImageThumbnail src={Theme.image.exampleSquare} />
        <ImageThumbnail src={Theme.image.exampleSquare} />
      </GridStyled>,
    ],
  },
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<GalleryProjectNewProps> = (args) => (
  <>
    <GalleryProjectNew {...args} />
    <Frame />
  </>
);

export const Basic = Template.bind({});
