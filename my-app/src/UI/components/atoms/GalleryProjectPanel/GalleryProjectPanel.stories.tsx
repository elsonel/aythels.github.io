import { Meta, Story } from '@storybook/react';
import { ProjectSectionFact } from '../ProjectSectionFact';
import {
  GalleryProjectPanel,
  GalleryProjectPanelProps,
} from './GalleryProjectPanel';

export default {
  title: 'Atoms/GalleryProjectPanel',
  component: GalleryProjectPanel,
  args: {
    title: 'SPOTLIGHT',
    subtitle: 'Media Streaming Platform',
    body: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ornare ligula a massa congue tempus. Vestibulum molestie efficitur risus, in commodo leo fringilla ut. Maecenas blandit nunc in purus rhoncus maximus efficitur eu ligula. Nam ullamcorper rhoncus luctus. Donec consectetur eget enim vel imperdiet. Suspendisse ut enim sit amet urna scelerisque gravida.',
      'In in urna sed elit sollicitudin ultrices. Aenean quis eros et augue congue tempor. Maecenas vel ornare magna, sit amet luctus lorem. Curabitur nisi felis, maximus at erat quis, rutrum interdum lectus. Aliquam vel enim sit amet lectus ullamcorper dignissim',
    ],
    facts: [
      <ProjectSectionFact key={1} label="TYPE" value=" Mobile Application" />,
      <ProjectSectionFact key={2} label="COMPLETION" value="June 2022" />,
      <ProjectSectionFact
        key={3}
        label="COLLABORATORS"
        value="Elson Liang, Xavier Woo, Perry Wang"
      />,
      <ProjectSectionFact key={4} label="GITHUB" value="Link" />,
    ],
  },
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<GalleryProjectPanelProps> = (args) => (
  <GalleryProjectPanel {...args} />
);

export const Basic = Template.bind({});
