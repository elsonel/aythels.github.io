import { Meta, Story } from '@storybook/react';
import {
  GalleryHeaderBrowser,
  GalleryHeaderBrowserProps,
} from './GalleryHeaderBrowser';

export default {
  title: 'Groups/GalleryHeader/GalleryHeaderBrowser',
  component: GalleryHeaderBrowser,
  args: {
    pageTabs: [
      {
        label: 'VISUAL ARTS',
        isSelected: true,
        onClick: () => {},
      },
      {
        label: 'UI / UX',
        isSelected: false,
        onClick: () => {},
      },
      {
        label: 'ARCHITECTURE',
        isSelected: false,
        onClick: () => {},
      },
    ],
    sortTabs: [
      {
        label: 'NEWEST',
        isSelected: true,
        onClick: () => {},
      },
      {
        label: 'OLDEST',
        isSelected: false,
        onClick: () => {},
      },
      {
        label: 'A - Z',
        isSelected: false,
        onClick: () => {},
      },
      {
        label: 'Z - A',
        isSelected: false,
        onClick: () => {},
      },
    ],
  },
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<GalleryHeaderBrowserProps> = (args) => (
  <GalleryHeaderBrowser {...args} />
);

export const Basic = Template.bind({});
