import { Meta, Story } from '@storybook/react';
import { TabLine, TabLineProps } from './TabLine';

export default {
  title: 'Atoms/TabLine',
  component: TabLine,
  args: { lineStart: 0, lineWidth: 100 },
  argTypes: {},
} as Meta;

const Template: Story<TabLineProps> = (args) => <TabLine {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  ...Basic.args,
};

export const Basic2 = Template.bind({});
Basic2.args = {
  ...Basic2.args,
  lineStart: 100,
};
