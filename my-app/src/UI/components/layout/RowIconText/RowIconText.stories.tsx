import { Meta, Story } from '@storybook/react';
import { Github } from 'styled-icons/boxicons-logos';
import { IIconSVG } from '../../atoms/IIconSVG';
import { Paragraph } from '../../text/Paragraph';
import { RowIconText, RowIconTextProps } from './RowIconText';

export default {
  title: 'Layout/RowIconText',
  component: RowIconText,
  args: {
    children: <Paragraph isWrapped={false}>Hello</Paragraph>,
    icon: <IIconSVG src={Github} />,
    gap: 6,
    isIconOnRight: false,
  },
} as Meta;

const Template: Story<RowIconTextProps> = (args) => <RowIconText {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  ...Basic.args,
};

export const TextOnly = Template.bind({});
TextOnly.args = {
  ...TextOnly.args,
  icon: undefined,
};

export const IconOnly = Template.bind({});
IconOnly.args = {
  ...IconOnly.args,
  children: undefined,
};

export const IconOnRight = Template.bind({});
IconOnRight.args = {
  ...IconOnRight.args,
  isIconOnRight: true,
};
