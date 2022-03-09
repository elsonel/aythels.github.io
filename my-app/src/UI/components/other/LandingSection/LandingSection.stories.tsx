import { Meta, Story } from '@storybook/react';
import { LandingSection, LandingSectionProps } from './LandingSection';

export default {
    title: 'Other/LandingSection',
    component: LandingSection,
    args: {
      size: 20, 
    },
} as Meta;

const Template: Story<LandingSectionProps> = (args) => <LandingSection {...args} />;

export const Small = Template.bind({});
Small.args = {
  ...Small.args,
  size: 16, 
}