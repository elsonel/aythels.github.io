import { Meta, Story } from '@storybook/react';
import { GalleryHeader, GalleryHeaderProps } from './GalleryHeader';

export default {
  title: 'Groups/GalleryHeader',
  component: GalleryHeader,
  args: {
    tabs: [
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
  },
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<GalleryHeaderProps> = (args) => (
  <GalleryHeader {...args} />
);

export const Basic = Template.bind({});
