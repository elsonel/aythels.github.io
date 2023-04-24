import { Meta, Story } from '@storybook/react';
import { Frame } from '../../../atoms/Frame/Frame';
import { ScrollBlock } from '../../../other/ScrollBlock/ScrollBlock';
import { EXAMPLE_FACTS, EXAMPLE_PARAGRAPHS } from '../helpers';
import { Body, IBodyProps } from './Body';
import { Theme } from '../../../../utilities/themes/Theme';

const IMAGES = [
  { src: Theme.image.examplePortrait, alt: 'IMAGE 1' },
  { src: Theme.image.examplePortrait, alt: 'IMAGE 2' },
  { src: Theme.image.examplePortrait, alt: 'IMAGE 3' },
  { src: Theme.image.examplePortrait, alt: 'IMAGE 4' },
  { src: Theme.image.examplePortrait, alt: 'IMAGE 5' },
  { src: Theme.image.examplePortrait, alt: 'IMAGE 6' },
  { src: Theme.image.exampleLandscape, alt: 'IMAGE 7' },
  { src: Theme.image.exampleLandscape, alt: 'IMAGE 8' },
  { src: Theme.image.exampleLandscape, alt: 'IMAGE 9' },
  { src: Theme.image.exampleLandscape, alt: 'IMAGE 10' },
  { src: Theme.image.exampleLandscape, alt: 'IMAGE 11' },
  { src: Theme.image.exampleLandscape, alt: 'IMAGE 12' },
];

const IMAGES_DESKTOP = [
  [IMAGES[0], IMAGES[1], IMAGES[2]],
  [IMAGES[3], IMAGES[4], IMAGES[5]],
  [IMAGES[6], IMAGES[7], IMAGES[8]],
  [IMAGES[9], IMAGES[10], IMAGES[11]],
];

const IMAGES_MOBILE = [
  [IMAGES[0], IMAGES[1]],
  [IMAGES[2], IMAGES[3]],
  [IMAGES[4], IMAGES[5]],
  [IMAGES[6], IMAGES[7]],
  [IMAGES[8], IMAGES[9]],
  [IMAGES[10], IMAGES[11]],
];

const INITIAL_LENGTH = 800;

export default {
  title: 'Groups/ProjectDetailsPage/Body',
  component: Body,
  argTypes: { onAssetsLoad: { action: 'loaded' } },
  args: {
    title: 'KINETIC BOARDWALK',
    facts: EXAMPLE_FACTS,
    paragraphs: EXAMPLE_PARAGRAPHS,
    scrollStart: 0,
    imagesDesktop: IMAGES_DESKTOP,
    imagesMobile: IMAGES_MOBILE,
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
