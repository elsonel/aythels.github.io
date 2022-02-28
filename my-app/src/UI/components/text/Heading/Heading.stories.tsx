import { Meta, Story } from '@storybook/react';
import { Heading, HeadingProps } from './Heading';

export default {
    title: 'Text/Heading',
    component: Heading,
    args: {
      children: 'Heading Text',
    },
} as Meta;

const Template: Story<HeadingProps> = (args) => <Heading {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  ...Basic.args,
  children: 'Heading Text',
};

export const Capitalized = Template.bind({});
Capitalized.args = {
  ...Capitalized.args,
  children: 'HEADING TEXT',
};