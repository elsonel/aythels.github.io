import React from 'react';
import { ROUTES } from '../utilities/routes';
import { ProjectTemplate } from './ProjectTemplate';

const PROJECT_LANDING_IMAGE = '/images/examples/landscape.jpg';
const PROJECT_TITLE = 'KINETIC BOARDWALK';
const PROJECT_SUBTITLE = 'Drifting Landscapes';

const PROJECT_FACTS = [
  {
    label: 'TYPE',
    value: 'Public Amenity / Mega-Infastructure',
  },
  {
    label: 'REGION',
    value: 'Los Angeles, California',
  },
  {
    label: 'SUPERVISOR',
    value: 'Nathan Bishop (ARC380)',
  },
  {
    label: 'COLLABORATORS',
    value: 'Omar Abdellatif',
  },
  {
    label: 'COMPLETED',
    value: 'December 2020',
  },
];

const PROJECT_PARAGRAPHS = [
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
    title: `Coastal Infrastructure Inspired by Natural Topology`,
    body: `                  
      Inspired by sand dunes and grass hills, the Kinetic Boardwalk's form is made up of a modular system of "bumps" that can be mechanically controlled to individually rise or flatten at will, creating a variety of built environments with different use cases. The bumps can be used as deployable floodwalls against high tides, lookout points, or rest areas for pedestrians.
    `,
  },
  {
    title: `A Modular & Mechanized System`,
    body: `                  
      Each bump is made up of a grid of interlocking tiles layered over large round inflatables that are powered by motorized air pumps. The tiles rise to different elevations when the inflatables hidden underneath are powered, creating the appearance of a curved surface. Rubber flaps connect each tile lengthwise, hiding cracks, and providing a water-tight seal.
    `,
  },
];

const BACK_ROUTE = ROUTES.architecture['foldPavilion'];
const FORWARD_ROUTE = ROUTES.architecture['basiliskTower'];
const PAGE_TITLE = `ELSON LIANG | Kinetic Boardwalk`;

export const PageProjectKineticBoardwalk: React.FC = (): React.ReactElement => (
  <ProjectTemplate
    projectLandingImage={PROJECT_LANDING_IMAGE}
    projectTitle={PROJECT_TITLE}
    projectSubtitle={PROJECT_SUBTITLE}
    projectPrototypeLink={undefined}
    projectFacts={PROJECT_FACTS}
    projectParagraphs={PROJECT_PARAGRAPHS}
    backRoute={BACK_ROUTE}
    forwardRoute={FORWARD_ROUTE}
    pageTitle={PAGE_TITLE}
  />
);
