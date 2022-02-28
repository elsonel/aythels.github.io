import { Meta, Story } from '@storybook/react';
import { FooterText, FooterTextProps } from './FooterText';

export default {
    title: 'Other/Footer/FooterText',
    component: FooterText,
    args: {
      align: 'left',
      size: 'small',
    },
} as Meta;

const Template: Story<FooterTextProps> = (args) => <FooterText {...args} />;

export const Desktop = Template.bind({});
Desktop.args = {
  ...Desktop.args,
  align: 'left',
  size: 'small',
};

export const Mobile = Template.bind({});
Mobile.args = {
  ...Mobile.args,
  align: 'center',
  size: 'tiny',
};
