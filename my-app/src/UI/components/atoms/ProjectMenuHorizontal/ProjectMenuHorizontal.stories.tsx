import { Meta, Story } from '@storybook/react';
import React from 'react';
import {
  ProjectMenuHorizontal,
  ProjectMenuHorizontalProps,
} from './ProjectMenuHorizontal';

export default {
  title: 'Atoms/ProjectMenuHorizontal',
  component: ProjectMenuHorizontal,
  args: {
    tabs: [
      {
        label: 'OVERVIEW',
        isActive: true,
        onClick: () => {},
      },
      {
        label: 'GALLERY',
        isActive: true,
        onClick: () => {},
      },
      {
        label: 'GOALS',
        isActive: true,
        onClick: () => {},
      },
      {
        label: 'PROCESS',
        isActive: false,
        onClick: () => {},
      },
      {
        label: 'FINAL PRODUCT',
        isActive: false,
        onClick: () => {},
      },
      {
        label: 'REFLECTION',
        isActive: false,
        onClick: () => {},
      },
    ],
  },
  argTypes: {},
} as Meta;

const Template: Story<ProjectMenuHorizontalProps> = (args) => (
  <ProjectMenuHorizontal {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  ...Basic.args,
};
