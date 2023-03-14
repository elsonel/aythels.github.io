import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import { Paragraph } from '../../text/Paragraph/Paragraph';
import { FixedScrollFade, FixedScrollFadeProps } from './FixedScrollFade';

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
    scrollStart: 0,
    scrollDuration: 300,
    initialOffsetY: 0,
    finalOffsetY: -150,
    initialOpacity: 1,
    finalOpacity: 0,
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
