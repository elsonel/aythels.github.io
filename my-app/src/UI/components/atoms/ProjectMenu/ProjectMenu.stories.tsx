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
    subtitle: 'UI / UX',
    title: 'SPOTLIGHT',
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
        'OVERVIEW WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW',
      isSelected: true,
      onClick: () => {},
    },
    {
      label:
        'OVERVIEW WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW',
      isSelected: false,
      onClick: () => {},
    },
    {
      label:
        'OVERVIEW WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW',
      isSelected: false,
      onClick: () => {},
    },
    {
      label:
        'OVERVIEW WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW',
      isSelected: false,
      onClick: () => {},
    },
    {
      label:
        'OVERVIEW WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW',
      isSelected: false,
      onClick: () => {},
    },
    {
      label:
        'OVERVIEW WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW',
      isSelected: false,
      onClick: () => {},
    },
    {
      label:
        'OVERVIEW WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW',
      isSelected: false,
      onClick: () => {},
    },
    {
      label:
        'OVERVIEW WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW',
      isSelected: false,
      onClick: () => {},
    },
    {
      label:
        'OVERVIEW WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW',
      isSelected: false,
      onClick: () => {},
    },
    {
      label:
        'OVERVIEW WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW',
      isSelected: false,
      onClick: () => {},
    },
    {
      label:
        'OVERVIEW WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW',
      isSelected: false,
      onClick: () => {},
    },
    {
      label:
        'OVERVIEW WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW',
      isSelected: false,
      onClick: () => {},
    },
    {
      label:
        'OVERVIEW WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW',
      isSelected: false,
      onClick: () => {},
    },
  ],
  subtitle:
    'ASFFFFFFFFF FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFOJIOJIOJIOAIJFIOAS',
  title: 'THIS IS SUPPOSED TO BE A LONG TITLE AOIISGIOSAIGAIGJAIOJGIOGIOSJO',
};

export const NoText = Template.bind({});
NoText.args = {
  ...NoText.args,
  subtitle: undefined,
  title: undefined,
};
