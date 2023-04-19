import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Theme } from '../../../utilities/themes/Theme';
import { ProgressLine, ProgressLineProps } from './ProgressLine';

export default {
  title: 'Atoms/ProgressLine',
  component: ProgressLine,
  args: {
    lineStart: 0,
    lineWidth: 100,
    backLineColor: Theme.color.outline,
    frontLineColor: Theme.color.text,
  },
  argTypes: {},
} as Meta;

const Template: Story<ProgressLineProps> = (args) => <ProgressLine {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  ...Basic.args,
};

export const Basic2 = Template.bind({});
Basic2.args = {
  ...Basic2.args,
  lineStart: 100,
};
