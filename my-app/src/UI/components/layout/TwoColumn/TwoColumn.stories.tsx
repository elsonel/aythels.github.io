import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import { TwoColumn, TwoColumnProps } from './TwoColumn';

const Left = styled.div`
  background-color: yellow;
`;

const Right = styled.div`
  background-color: red;
`;

export default {
  title: 'Layout/TwoColumn',
  component: TwoColumn,
  args: {
    children: [<Left>Hello</Left>, <Right>Bye</Right>],
    leftRatio: 0.5,
    rightRatio: 0.5,
    breakIfLessThan: 800,
    isRightToTop: false,
  },
} as Meta;

const Template: Story<TwoColumnProps> = (args) => <TwoColumn {...args} />;

export const Basic = Template.bind({});

export const AlwaysBroken = Template.bind({});
AlwaysBroken.args = {
  ...AlwaysBroken.args,
  breakIfLessThan: undefined,
};

export const RightToTop = Template.bind({});
RightToTop.args = {
  ...RightToTop.args,
  isRightToTop: true,
};