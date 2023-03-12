import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import { Theme } from '../../../../utility/themes/Theme';
import { Landing, LandingProps } from './Landing';

export default {
  title: 'Groups/GalleryProjectNew/Landing',
  component: Landing,
  args: {
    title: 'KINETIC BOARDWALK',
    subtitle: 'Drifting Landscapes',
    imageSrc: Theme.image.exampleSquareSmall,
    prototypeHref: '/',
    scrollLength: 1000,
  },
} as Meta;

const Template: Story<LandingProps> = (args) => <Landing {...args} />;

export const Basic = Template.bind({});
