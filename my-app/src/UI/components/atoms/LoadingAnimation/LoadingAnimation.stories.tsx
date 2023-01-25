import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import { Theme } from '../../../utility/themes/Theme';
import { LoadingAnimation, LoadingAnimationProps } from './LoadingAnimation';

export default {
  title: 'Atoms/LoadingAnimation',
  component: LoadingAnimation,
  args: {},
  argTypes: {},
} as Meta;

const Template: Story<LoadingAnimationProps> = (args) => (
  <LoadingAnimation {...args} />
);

export const Basic = Template.bind({});
