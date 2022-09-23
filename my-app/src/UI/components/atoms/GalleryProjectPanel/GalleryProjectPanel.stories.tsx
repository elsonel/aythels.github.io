import { Meta, Story } from '@storybook/react';
import { LinkExternalFactText } from '../../inputs/LinkExternalFactText';
import { DEFAULT_TITLE_BREAKPOINTS } from '../PageTitle';
import {
  GalleryProjectPanel,
  GalleryProjectPanelProps,
} from './GalleryProjectPanel';

export default {
  title: 'Atoms/GalleryProjectPanel',
  component: GalleryProjectPanel,
  args: {
    titleSize: 'large',
    title: 'SPOTLIGHT',
    subtitle: 'Media Streaming Platform',
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
        value: <LinkExternalFactText children="Link" link={'/'} />,
      },
    ],
    titleBreakpoints: DEFAULT_TITLE_BREAKPOINTS,
  },
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<GalleryProjectPanelProps> = (args) => (
  <GalleryProjectPanel {...args} />
);

export const Basic = Template.bind({});