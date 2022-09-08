import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import {
  StickyEndsContainer,
  StickyEndsContainerProps,
} from './StickyEndsContainer';

const Child = styled.div`
  width: 100%;
  background-color: lightblue;
`;

const Parent = styled.div`
  width: 100%;
  height: 3000px;

  background-color: pink;
`;

const Gap = styled.div`
  width: 100%;
  height: 200px;
`;

export default {
  title: 'Layout/StickyEndsContainer',
  component: StickyEndsContainer,
  args: {
    topMargin: 20,
    bottomMargin: 20,
    children: (
      <Child>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dui massa,
        lobortis non dignissim et, aliquet id nunc. Mauris vel odio ac lacus
        viverra venenatis dictum et ipsum. Nullam accumsan volutpat felis, quis
        pharetra tortor dapibus non. Integer euismod velit nibh, quis aliquet
        odio aliquet ut. In hac habitasse platea dictumst. Fusce at quam nec
        urna laoreet imperdiet. Nam ipsum odio, egestas non urna sit amet,
        vulputate pulvinar diam. Proin at tempus velit, eu imperdiet diam.
        Quisque viverra erat non diam dapibus consequat. Mauris volutpat
        condimentum metus sit amet ultrices. Pellentesque sed malesuada purus.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dui massa,
        lobortis non dignissim et, aliquet id nunc. Mauris vel odio ac lacus
        viverra venenatis dictum et ipsum. Nullam accumsan volutpat felis, quis
        pharetra tortor dapibus non. Integer euismod velit nibh, quis aliquet
        odio aliquet ut. In hac habitasse platea dictumst. Fusce at quam nec
        urna laoreet imperdiet. Nam ipsum odio, egestas non urna sit amet,
        vulputate pulvinar diam. Proin at tempus velit, eu imperdiet diam.
        Quisque viverra erat non diam dapibus consequat. Mauris volutpat
        condimentum metus sit amet ultrices. Pellentesque sed malesuada purus.
      </Child>
    ),
  },
} as Meta;

const Template: Story<StickyEndsContainerProps> = (args) => (
  <div>
    <Gap />
    <Parent>
      <StickyEndsContainer {...args} />
    </Parent>
    <Gap />
  </div>
);

export const Basic = Template.bind({});
