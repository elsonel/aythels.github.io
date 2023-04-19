import { Meta, Story } from '@storybook/react';
import { Theme } from '../../../utilities/themes/Theme';
import { Paragraph, IParagraphProps } from './Paragraph';

export default {
  title: 'Text/Paragraph',
  component: Paragraph,
  args: {
    children: 'Hello World',
    font: Theme.font.default,
    size: 'default',
    weight: 'regular',
    textAlign: 'left',
    color: 'black',
    isWrapped: true,
  },
} as Meta;

const Template: Story<IParagraphProps> = (args) => <Paragraph {...args} />;

export const Default = Template.bind({});
Default.args = {
  ...Default.args,
};

export const Heading = Template.bind({});
Heading.args = {
  ...Heading.args,
  size: 'h1',
};

export const Light = Template.bind({});
Light.args = {
  ...Light.args,
  weight: 'light',
};

export const Bold = Template.bind({});
Bold.args = {
  ...Bold.args,
  weight: 'bold',
};

export const Centered = Template.bind({});
Centered.args = {
  ...Centered.args,
  textAlign: 'center',
};

export const AltFont = Template.bind({});
AltFont.args = {
  ...AltFont.args,
  font: Theme.font.title,
};

export const LongText = Template.bind({});
LongText.args = {
  ...LongText.args,
  children:
    'FFFFFFFFFFFFFFF FFFFFFFFFFFFFFFFFFFFFFFFFFF FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF',
};

export const LongTextNoWrap = Template.bind({});
LongTextNoWrap.args = {
  ...LongTextNoWrap.args,
  isWrapped: false,
  children:
    'FFFFFFFFFFFFFFF FFFFFFFFFFFFFFFFFFFFFFFFFFF FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF',
};
