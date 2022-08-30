import { Meta, Story } from '@storybook/react';
import { Tab } from '../../inputs/Tab';
import { Tabs, TabsProps } from './Tabs';

export default {
  title: 'Groups/Tabs',
  component: Tabs,
  args: {
    tabs: [
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
  },
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<TabsProps> = (args) => <Tabs {...args} />;

export const Basic = Template.bind({});
