import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import { Paragraph } from '../../text/Paragraph/Paragraph';
import {
  FADE_MODE,
  FixedScrollFade,
  FixedScrollFadeProps,
} from './FixedScrollFade';

const Block = styled.div`
  width: 100%;
  height: 2000px;
`;

const Container = styled.div`
  position: fixed;
  left: 0px;
  bottom: 0px;
`;

export default {
  title: 'Other/FixedScrollFade',
  component: FixedScrollFade,
  args: {
    children: (
      <Paragraph size="h2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Paragraph>
    ),
    startY: 0,
    duration: 300,
    offsetY: 150,
    isFullWidth: false,
    fadeMode: FADE_MODE.OUT,
  },
} as Meta;

const Template: Story<FixedScrollFadeProps> = (args) => (
  <>
    <Container>
      <FixedScrollFade {...args} />
    </Container>
    <Block />
  </>
);

export const Basic = Template.bind({});
Basic.args = {
  ...Basic.args,
};
