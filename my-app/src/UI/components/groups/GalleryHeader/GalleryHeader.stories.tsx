import { Meta, Story } from '@storybook/react';
import { GalleryHeader, GalleryHeaderProps } from './GalleryHeader';

export default {
  title: 'Groups/GalleryHeader',
  component: GalleryHeader,
  args: {
    pageTabs: [
      {
        label: 'VISUAL ARTS',
        isSelected: false,
        onClick: () => {},
      },
      {
        label: 'UI UX',
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
        isSelected: false,
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

const Template: Story<GalleryHeaderProps> = (args) => (
  <GalleryHeader {...args} />
);

export const Basic = Template.bind({});
