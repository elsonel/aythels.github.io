import { Meta, Story } from '@storybook/react';
import { Frame } from '../../../atoms/Frame/Frame';
import { ScrollBlock } from '../../../other/ScrollBlock/ScrollBlock';
import { EXAMPLE_FACTS, EXAMPLE_PARAGRAPHS } from '../helpers';
import { Body, IBodyProps } from './Body';

const INITIAL_LENGTH = 800;

export default {
  title: 'Groups/ProjectDetailsPage/Body',
  component: Body,
  args: {
    title: 'KINETIC BOARDWALK',
    facts: EXAMPLE_FACTS,
    paragraphs: EXAMPLE_PARAGRAPHS,
    scrollStart: 0,
  },
} as Meta;

const Template: Story<IBodyProps> = (args) => <Body {...args} />;

export const Basic = Template.bind({});

const WithFrameTemplate: Story<IBodyProps> = (args) => (
  <>
    <ScrollBlock scrollLength={INITIAL_LENGTH} />
    <Body {...args} />
    <Frame />
  </>
);
export const WithFrame = WithFrameTemplate.bind({});
WithFrame.args = {
  ...WithFrame.args,
  scrollStart: INITIAL_LENGTH,
};
