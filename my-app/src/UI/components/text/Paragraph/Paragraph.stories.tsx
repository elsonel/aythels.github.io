import { Meta, Story } from '@storybook/react';
import { Paragraph, ParagraphProps } from './Paragraph';

export default {
  title: 'Text/Paragraph',
  component: Paragraph,
  args: {
    children: 'Hello World',
  },
} as Meta;

const Template: Story<ParagraphProps> = (args) => <Paragraph {...args} />;

export const Small = Template.bind({});
Small.args = {
  ...Small.args,
  size: 'small',
};

export const Large = Template.bind({});
Large.args = {
  ...Large.args,
  size: 'large',
};

export const Light = Template.bind({});
Light.args = {
  ...Light.args,
  weight: 'light1',
};

export const Bold = Template.bind({});
Bold.args = {
  ...Bold.args,
  weight: 'bold2',
};

export const Center = Template.bind({});
Center.args = {
  ...Center.args,
  textAlign: 'center',
};

export const LongText = Template.bind({});
LongText.args = {
  ...LongText.args,
  children:
    'FFFFFFFFFFFFFFF FFFFFFFFFFFFFFFFFFFFFFFFFFF FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF',
};

export const LineLongText = Template.bind({});
LineLongText.args = {
  ...LineLongText.args,
  isWrapped: false,
  children:
    'FFFFFFFFFFFFFFF FFFFFFFFFFFFFFFFFFFFFFFFFFF FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF',
};
