import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import { Paragraph } from '../../text/Paragraph/Paragraph';
import { FixedStickyScroll, FixedStickyScrollProps } from './FixedStickyScroll';

const Block = styled.div`
  width: 100%;
  height: 4000px;
`;

const Container = styled.div`
  position: fixed;
  left: 0px;
  bottom: 0px;
`;

export default {
  title: 'Other/FixedStickyScroll',
  component: FixedStickyScroll,
  args: {
    children: (
      <Paragraph size="h2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Paragraph>
    ),
    scrollSpeed: 0.5,
    topLimit: 100,
  },
} as Meta;

const Template: Story<FixedStickyScrollProps> = (args) => (
  <>
    <Container>
      <FixedStickyScroll {...args} />
    </Container>
    <Block />
  </>
);

export const Basic = Template.bind({});
Basic.args = {
  ...Basic.args,
};
