import { Meta, Story } from '@storybook/react';
import { ScrollBlock, ScrollBlockProps } from './ScrollBlock';

export default {
  title: 'Other/ScrollBlock',
  component: ScrollBlock,
  args: {
    scrollLength: 100,
  },
} as Meta;

const Template: Story<ScrollBlockProps> = (args) => <ScrollBlock {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  ...Basic.args,
};

const DoubleTemplate: Story<ScrollBlockProps> = (args) => (
  <>
    <ScrollBlock {...args} />
    <ScrollBlock {...args} />
  </>
);

export const TwoInstances = DoubleTemplate.bind({});
TwoInstances.args = {
  ...TwoInstances.args,
};
