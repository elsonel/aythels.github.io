import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import { Frame } from '../../atoms/Frame/Frame';
import {
  FrameLayoutSticky,
  IFrameLayoutStickyProps,
} from './FrameLayoutSticky';

const Sticky = styled.div`
  box-sizing: border-box;
  width: 100px;
  height: 100%;
  border: 6px solid green;
  background-color: red;
`;

export default {
  title: 'Layout/FrameLayoutSticky',
  component: FrameLayoutSticky,
  args: {
    children: (
      <Sticky>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        et quas molestias excepturi sint occaecati cupiditate non provident,
        similique sunt in culpa qui officia deserunt mollitia animi, id est
        laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
        distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
        cumque nihil impedit quo minus id quod maxime placeat facere possimus,
        omnis voluptas assumenda est, omnis dolor repellendus. At vero eos et
        accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
        voluptatum deleniti atque corrupti quos dolores et quas molestias
        excepturi sint occaecati cupiditate non provident, similique sunt in
        culpa qui officia deserunt mollitia animi, id est laborum et dolorum
        fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam
        libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
        quo minus id quod maxime placeat facere possimus, omnis voluptas
        assumenda est, omnis dolor repellendus.
      </Sticky>
    ),
  },
} as Meta;

const Template: Story<IFrameLayoutStickyProps> = (args) => (
  <>
    <FrameLayoutSticky {...args} />
    <Frame />
  </>
);

export const Basic = Template.bind({});
