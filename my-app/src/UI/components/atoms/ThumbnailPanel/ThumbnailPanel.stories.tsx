import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import { Theme } from '../../../utility/themes/Theme';
import { ImageThumbnail } from '../ImageThumbnail';
import { ThumbnailPanel, ThumbnailPanelProps } from './ThumbnailPanel';

export default {
  title: 'Atoms/ThumbnailPanel',
  component: ThumbnailPanel,
  args: {
    title: 'RPG NODE BOARD',
    subtitle: 'Web Application',
    description: `Full stack web application that facilitates the collaborative creation, organization and sharing of lore for tabletop roleplaying games; storytelling and worldbuilding.`,
    githubLink: '/github',
    prototypeLink: '/prototype',
  },
  argTypes: {},
} as Meta;

const Template: Story<ThumbnailPanelProps> = (args) => (
  <ThumbnailPanel {...args} />
);

export const Basic = Template.bind({});

const Thumbnail = styled(ImageThumbnail)`
  cursor: auto;
`;

const TemplateWithThumbnail: Story<ThumbnailPanelProps> = (args) => (
  <Thumbnail
    src={Theme.image.exampleSquare}
    isFillingParent={false}
    overlayElement={<ThumbnailPanel {...args} />}
  />
);

export const WithThumbnail = TemplateWithThumbnail.bind({});
