import { Meta, Story } from '@storybook/react';
import { GalleryHeaderBase, GalleryHeaderBaseProps } from './GalleryHeaderBase';

export default {
  title: 'Groups/GalleryHeader/GalleryHeaderBase',
  component: GalleryHeaderBase,
  args: {
    children: [<div key={1}>Left</div>, <div key={2}>Right</div>],
    pageTabs: [
      {
        label: 'VISUAL ARTS',
        isSelected: true,
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

const Template: Story<GalleryHeaderBaseProps> = (args) => (
  <GalleryHeaderBase {...args} />
);

export const Basic = Template.bind({});
