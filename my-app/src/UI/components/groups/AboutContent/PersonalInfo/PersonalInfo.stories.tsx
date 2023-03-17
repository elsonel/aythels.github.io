import { Meta, Story } from '@storybook/react';
import React from 'react';
import { PersonalInfo, IPersonalInfoProps } from './PersonalInfo';

export default {
  title: 'Groups/AboutContent/PersonalInfo',
  component: PersonalInfo,
  args: {},
} as Meta;

const Template: Story<IPersonalInfoProps> = (args) => (
  <PersonalInfo {...args} />
);

export const Basic = Template.bind({});
