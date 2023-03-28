import { Meta, Story } from '@storybook/react';
import { Frame } from '../../atoms/Frame/Frame';
import { EXAMPLE_FACTS } from './helpers';
import {
  ProjectDetailsPage,
  IProjectDetailsPageProps,
} from './ProjectDetailsPage';

export default {
  title: 'Groups/ProjectDetailsPage',
  component: ProjectDetailsPage,
  argTypes: { onClick: { action: 'clicked' } },
  args: {
    isLoaded: true,
    delay: 0,
    title: 'KINETIC BOARDWALK',
    facts: EXAMPLE_FACTS,
    paragraphs: [
      {
        title: undefined,
        body: `                  
          The Kinetic Boardwalk is an adaptive and programmable system
          of inflating tiles that span the coastline of Venice Beach.
          Acting as both a public amenity and functional
          infrastructure, the structure aims to address high tides and
          rising water levels while substituting as an exhibitive
          pedestrian walkway.
        `,
      },
      {
        title: `Inspired By Sand Dunes and Grass Hills`,
        body: `                  
          The Kinetic Boardwalk's form is made up of a modular system
          of "bumps" that can be mechanically controlled to
          individually rise or flatten at will. A variety of built
          environments with different use cases are created. The bump
          can be used as a deployable floodwall against high tides, a
          lookout point or rest area for pedestrians.
        `,
      },
      {
        title: `A Mechanized System`,
        body: `                  
          Each bump is made up of a grid of interlocking tiles layered
          over inflatables which are powered by motorized air pumps.
          The tiles rise at different elevations when the round
          inflatables hidden underneath are powered to create the
          appearance of a curved surface. Rubber flaps connect each
          tile length wise, hiding cracks and providing a water-tight
          seal.
        `,
      },
    ],
  },
} as Meta;

const Template: Story<IProjectDetailsPageProps> = (args) => (
  <ProjectDetailsPage {...args} />
);

export const Basic = Template.bind({});

const WithFrameTemplate: Story<IProjectDetailsPageProps> = (args) => (
  <>
    <ProjectDetailsPage {...args} />
    <Frame />
  </>
);
export const WithFrame = WithFrameTemplate.bind({});
