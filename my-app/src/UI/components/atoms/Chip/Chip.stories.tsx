import { Meta, Story } from '@storybook/react';
import { Github } from 'styled-icons/fa-brands';
import { Theme } from '../../../utility/themes/Theme';
import { Chip, ChipProps } from './Chip';

export default {
  title: 'Atoms/Chip',
  component: Chip,
  args: { icon: Github, label: 'PHOTOSHOP' },
  argTypes: {},
} as Meta;

const Template: Story<ChipProps> = (args) => <Chip {...args} />;

export const Basic = Template.bind({});

export const IconLogo = Template.bind({});
IconLogo.args = {
  ...IconLogo.args,
  icon: Theme.icon.logo,
};

export const IconThin = Template.bind({});
IconThin.args = {
  ...IconThin.args,
  icon: Theme.icon.exampleIconThin,
};

export const IconColored = Template.bind({});
IconColored.args = {
  ...IconColored.args,
  icon: Theme.icon.exampleIconColored,
};
