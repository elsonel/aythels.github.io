import { Meta, Story } from '@storybook/react';
import { Github, Linkedin } from 'styled-icons/boxicons-logos';
import { Email } from 'styled-icons/entypo';
import { IIconSVG } from '../../atoms/IIconSVG';
import { RowIcon, RowIconProps } from './RowIcon';

export default {
  title: 'Layout/RowIcon',
  component: RowIcon,
  args: {
    size: '24',
    children: [
      <IIconSVG src={Github} />,
      <IIconSVG src={Linkedin} />,
      <IIconSVG src={Email} />,
    ],
    gap: undefined,
  },
} as Meta;

const Template: Story<RowIconProps> = (args) => <RowIcon {...args} />;

export const Small = Template.bind({});
Small.args = {
  ...Small.args,
  size: 24,
};

export const Large = Template.bind({});
Large.args = {
  ...Large.args,
  size: 32,
};
