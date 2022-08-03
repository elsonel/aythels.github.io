import { Meta, Story } from '@storybook/react';
import { ProjectMenu, ProjectMenuProps } from './ProjectMenu';

export default {
  title: 'Atoms/ProjectMenu',
  component: ProjectMenu,
  args: {
    tabs: [
      {
        label: 'OVERVIEW',
        isSelected: false,
        onClick: () => {},
      },
      {
        label: 'GALLERY',
        isSelected: true,
        onClick: () => {},
      },
      {
        label: 'PROCESS',
        isSelected: false,
        onClick: () => {},
      },
    ],
    isVisible: true,
  },
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<ProjectMenuProps> = (args) => <ProjectMenu {...args} />;

export const Basic = Template.bind({});

export const LongText = Template.bind({});
LongText.args = {
  ...LongText.args,
  tabs: [
    {
      label:
        'OVERVIEWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW',
      isSelected: false,
      onClick: () => {},
    },
    {
      label:
        'OVERVIEWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW',
      isSelected: false,
      onClick: () => {},
    },
    {
      label:
        'OVERVIEWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW',
      isSelected: false,
      onClick: () => {},
    },
    {
      label:
        'OVERVIEWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW',
      isSelected: false,
      onClick: () => {},
    },
    {
      label:
        'OVERVIEWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW',
      isSelected: false,
      onClick: () => {},
    },
    {
      label:
        'OVERVIEWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW',
      isSelected: false,
      onClick: () => {},
    },
    {
      label:
        'OVERVIEWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW',
      isSelected: false,
      onClick: () => {},
    },
    {
      label:
        'OVERVIEWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW',
      isSelected: false,
      onClick: () => {},
    },
    {
      label:
        'OVERVIEWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW',
      isSelected: false,
      onClick: () => {},
    },
    {
      label:
        'OVERVIEWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW',
      isSelected: false,
      onClick: () => {},
    },
    {
      label:
        'OVERVIEWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW',
      isSelected: false,
      onClick: () => {},
    },
    {
      label:
        'OVERVIEWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW',
      isSelected: false,
      onClick: () => {},
    },
    {
      label:
        'OVERVIEWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW',
      isSelected: false,
      onClick: () => {},
    },
  ],
};
