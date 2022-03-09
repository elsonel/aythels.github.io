import { Meta, Story } from '@storybook/react';
import { Landing, LandingProps } from './Landing';

export default {
    title: 'Input/Landing',
    component: Landing,
    args: {
      isReversed: false, 
    },
    argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<LandingProps> = (args) => <Landing {...args} />;

export const Small = Template.bind({});
Small.args = {
  ...Small.args,
  isReversed: false, 
}