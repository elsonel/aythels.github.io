import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import { FadeInParagraph, FadeInParagraphProps } from './FadeInParagraph';

const Background = styled.div`
  background-color: black;
  width: 100%;
  height: 100vh;
`;

export default {
  title: 'Text/FadeInParagraph',
  component: FadeInParagraph,
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    backgroundColor: 'black',
    middleColor: 'blue',
    color: 'white',
    delay: 0,
    isLoaded: true,
  },
} as Meta;

const Template: Story<FadeInParagraphProps> = (args) => (
  <Background>
    <FadeInParagraph {...args} />
  </Background>
);

export const Basic = Template.bind({});
Basic.args = {
  ...Basic.args,
};

export const Heading = Template.bind({});
Heading.args = {
  ...Heading.args,
  size: 'h1',
};
