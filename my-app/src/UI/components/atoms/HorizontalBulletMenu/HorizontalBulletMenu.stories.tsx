import { Meta, Story } from '@storybook/react';
import {
  HorizontalBulletMenu,
  HorizontalBulletMenuProps,
} from './HorizontalBulletMenu';

export default {
  title: 'Atoms/HorizontalBulletMenu',
  component: HorizontalBulletMenu,
  args: {
    tabs: [
      {
        onClick: () => {},
        isSelected: true,
      },
      {
        onClick: () => {},
        isSelected: false,
      },
      {
        onClick: () => {},
        isSelected: false,
      },
      {
        onClick: () => {},
        isSelected: false,
      },
    ],
  },
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<HorizontalBulletMenuProps> = (args) => (
  <HorizontalBulletMenu {...args} />
);

export const Basic = Template.bind({});
