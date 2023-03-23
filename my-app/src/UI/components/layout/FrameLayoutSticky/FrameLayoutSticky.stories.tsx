import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import { Frame } from '../../atoms/Frame/Frame';
import {
  FrameLayoutSticky,
  IFrameLayoutStickyProps,
} from './FrameLayoutSticky';

const Sticky = styled.div`
  width: 100px;
  height: 100%;
  background-color: red;
`;

export default {
  title: 'Layout/FrameLayoutSticky',
  component: FrameLayoutSticky,
  args: {
    children: <Sticky>Hello ABC</Sticky>,
  },
} as Meta;

const Template: Story<IFrameLayoutStickyProps> = (args) => (
  <>
    <FrameLayoutSticky {...args} />
    <Frame />
  </>
);

export const Basic = Template.bind({});
