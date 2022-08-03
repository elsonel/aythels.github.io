import { Meta, Story } from '@storybook/react';
import {
  LinkExternalFactText,
  LinkExternalFactTextProps,
} from './LinkExternalFactText';

export default {
  title: 'Inputs/LinkExternalFactText',
  component: LinkExternalFactText,
  args: {
    link: '/',
    children: 'LINK',
  },
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<LinkExternalFactTextProps> = (args) => (
  <LinkExternalFactText {...args} />
);

export const Basic = Template.bind({});

export const LongText = Template.bind({});
LongText.args = {
  ...LongText.args,
  children:
    'There are lots and lots and lots and lots and lots and lots of text here. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
};
