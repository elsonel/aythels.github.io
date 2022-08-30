import { Meta, Story } from '@storybook/react';
import {
  GalleryHeaderMobile,
  GalleryHeaderMobileProps,
} from './GalleryHeaderMobile';

export default {
  title: 'Groups/GalleryHeader/GalleryHeaderMobile',
  component: GalleryHeaderMobile,
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

const Template: Story<GalleryHeaderMobileProps> = (args) => (
  <GalleryHeaderMobile {...args} />
);

export const Basic = Template.bind({});
