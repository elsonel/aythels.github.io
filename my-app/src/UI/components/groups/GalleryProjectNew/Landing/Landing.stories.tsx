import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import { Theme } from '../../../../utility/themes/Theme';
import { Landing, LandingProps } from './Landing';

const Block = styled.div`
  width: 100%;
  height: 10000px;
`;

export default {
  title: 'Groups/GalleryProjectNew/Landing',
  component: Landing,
  argTypes: { onVisibilityChange: { action: 'Visibility changed' } },
  args: {
    title: 'KINETIC BOARDWALK',
    subtitle: 'Drifting Landscapes',
    imageSrc: Theme.image.exampleSquareSmall,
    prototypeHref: '/',
    scrollLength: 1000,
  },
} as Meta;

const Template: Story<LandingProps> = (args) => (
  <>
    <Landing {...args} />
    <Block />
  </>
);

export const Basic = Template.bind({});
