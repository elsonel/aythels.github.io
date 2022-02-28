import { Meta, Story } from '@storybook/react';
import { RowCenter, RowCenterProps } from './RowCenter';
import { Paragraph } from '../../text/Paragraph/Paragraph';

export default {
    title: 'Layout/RowCenter',
    component: RowCenter,
    args: {
      center: <Paragraph>Title</Paragraph>,
      justify: 'space-between',
    },
} as Meta;

const Template: Story<RowCenterProps> = (args) => (
  <RowCenter {...args}>
    <Paragraph>Hello</Paragraph>
    <Paragraph>Bye</Paragraph>
  </RowCenter>
);

export const Basic = Template.bind({});