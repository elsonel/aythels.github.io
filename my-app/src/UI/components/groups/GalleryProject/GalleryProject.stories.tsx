import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import { GalleryProject, GalleryProjectProps } from '.';
import { GalleryProjectPanel } from '../../atoms/GalleryProjectPanel';
import { ImageThumbnail } from '../../atoms/ImageThumbnail';
import { ProjectSectionFact } from '../../atoms/ProjectSectionFact';
import { Grid, GridBreakpoint } from '../../layout/Grid';

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
  width: 100%;
  height: ${({ theme }) => theme.size.header}px;
`;

const GridStyled = styled(Grid)`
  padding: 0px;
`;

export default {
  title: 'Groups/GalleryProject',
  component: GalleryProject,
  args: {
    children: [
      <GalleryProjectPanel
        title={'SPOTLIGHT'}
        subtitle={'Media Streaming Platform'}
        body={[
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ornare ligula a massa congue tempus. Vestibulum molestie efficitur risus, in commodo leo fringilla ut. Maecenas blandit nunc in purus rhoncus maximus efficitur eu ligula. Nam ullamcorper rhoncus luctus. Donec consectetur eget enim vel imperdiet. Suspendisse ut enim sit amet urna scelerisque gravida.',
          'In in urna sed elit sollicitudin ultrices. Aenean quis eros et augue congue tempor. Maecenas vel ornare magna, sit amet luctus lorem. Curabitur nisi felis, maximus at erat quis, rutrum interdum lectus. Aliquam vel enim sit amet lectus ullamcorper dignissim',
        ]}
        facts={[
          <ProjectSectionFact
            key={1}
            label="TYPE"
            value=" Mobile Application"
          />,
          <ProjectSectionFact key={2} label="COMPLETION" value="June 2022" />,
          <ProjectSectionFact
            key={3}
            label="COLLABORATORS"
            value="Elson Liang, Xavier Woo, Perry Wang"
          />,
          <ProjectSectionFact key={4} label="GITHUB" value="Link" />,
        ]}
      />,
      <GridStyled breakpoints={BREAKPOINTS} key={1}>
        <ImageThumbnail src="/example/square.jpg" />
        <ImageThumbnail src="/example/square.jpg" />
        <ImageThumbnail src="/example/square.jpg" />
        <ImageThumbnail src="/example/square.jpg" />
        <ImageThumbnail src="/example/square.jpg" />
        <ImageThumbnail src="/example/square.jpg" />
        <ImageThumbnail src="/example/square.jpg" />
        <ImageThumbnail src="/example/square.jpg" />
      </GridStyled>,
    ],
  },
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<GalleryProjectProps> = (args) => (
  <div>
    <Header />
    <GalleryProject {...args} />
  </div>
);

export const Basic = Template.bind({});
