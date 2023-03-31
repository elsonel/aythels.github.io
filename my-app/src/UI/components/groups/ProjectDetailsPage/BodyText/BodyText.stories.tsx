import { Meta, Story } from '@storybook/react';
import { BodyText, IBodyTextProps } from './BodyText';

export default {
  title: 'Groups/ProjectDetailsPage/BodyText',
  component: BodyText,
  args: {
    title: `Inspired By Sand Dunes and Grass Hills`,
    children: `The Kinetic Boardwalk is an adaptive and programmable system
    of inflating tiles that span the coastline of Venice Beach.
    Acting as both a public amenity and functional
    infrastructure, the structure aims to address high tides and
    rising water levels while substituting as an exhibitive
    pedestrian walkway.`,
  },
} as Meta;

const Template: Story<IBodyTextProps> = (args) => <BodyText {...args} />;

export const Basic = Template.bind({});
