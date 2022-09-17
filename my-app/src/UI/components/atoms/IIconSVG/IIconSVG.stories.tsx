import { Meta, Story } from '@storybook/react';
import { ArrowDown } from 'styled-icons/bootstrap';
import { Github } from 'styled-icons/fa-brands';
import { Theme } from '../../../utility/themes/Theme';
import { IIconSVG, IIconSVGProps } from './IIconSVG';

export default {
  title: 'Atoms/IIconSVG',
  component: IIconSVG,
  args: { size: 32, src: Theme.icon.exampleIconBasic },
  argTypes: {},
} as Meta;

const Template: Story<IIconSVGProps> = (args) => <IIconSVG {...args} />;

export const Small = Template.bind({});
Small.args = {
  ...Small.args,
};

export const Large = Template.bind({});
Large.args = {
  ...Large.args,
  size: 64,
};

export const NarrowIcon = Template.bind({});
NarrowIcon.args = {
  ...NarrowIcon.args,
  src: Theme.icon.exampleIconThin,
};

export const Colored = Template.bind({});
Colored.args = {
  ...Colored.args,
  color: 'red',
};

export const StyledSmall = Template.bind({});
StyledSmall.args = {
  ...StyledSmall.args,
  src: Github,
};

export const StyledLarge = Template.bind({});
StyledLarge.args = {
  ...StyledLarge.args,
  size: 64,
  src: Github,
};

export const StyledNarrowIcon = Template.bind({});
StyledNarrowIcon.args = {
  ...StyledNarrowIcon.args,
  src: ArrowDown,
};

export const StyledColored = Template.bind({});
StyledColored.args = {
  ...StyledColored.args,
  color: 'red',
  src: Github,
};
